pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/payment/PullPayment.sol";

contract Payment is PullPayment {
  constructor()
    PullPayment()
    public
  {

  }

  function() public payable {
    // nothing to do
  }
}