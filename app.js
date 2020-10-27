require('dotenv').config() ;

const EtherReceiver = require('./build/contracts/EtherReceiver.json');
const Web3 = require('web3');

const privateKey = process.env.PRIVATE_KEY;
const infuraKey = process.env.INFURA_KEY;
const web3 = new Web3(new Web3.providers.HttpProvider( `https://ropsten.infura.io/v3/${infuraKey}`));
const etherReceiver = new web3.eth.Contract(EtherReceiver.abi, '0x1D26A086DfCda326Fe73e2ad42ba02904B833921');

const tx = {
  to : '0x1D26A086DfCda326Fe73e2ad42ba02904B833921',
  gasLimit: 3141592,
  gasUsed: 21662,
  data : etherReceiver.methods.withdraw().encodeABI()
}

web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
  web3.eth.sendSignedTransaction(signed.rawTransaction)
    .then((receipt) => {
      console.log(receipt);
    })
    .catch((error) => {
      console.log(error.message);
    });
});
