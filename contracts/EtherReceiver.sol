// SPDX-License-Identifier: MIT

pragma solidity 0.5.16;

contract EtherReceiver {
  address payable owner;

  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(
      msg.sender == owner,
      "Only owner can call this function."
    );
    _;
  }

  function () payable external {}

  function getBalance() public view returns (uint) {
    return address(this).balance;
  }

  function greeting() public pure returns (string memory) {
    return "Hello, I am an ether receiver!";
  }

  function withdraw() onlyOwner public {
    owner.transfer(address(this).balance);
  }
}
