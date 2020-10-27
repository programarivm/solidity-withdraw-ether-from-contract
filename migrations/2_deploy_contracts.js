const EtherReceiver = artifacts.require("EtherReceiver");

module.exports = function (deployer) {
  deployer.deploy(EtherReceiver);
};
