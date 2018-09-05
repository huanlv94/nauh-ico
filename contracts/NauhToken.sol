pragma solidity 0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

/** Use detail lib token */
import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";

contract NauhToken is MintableToken, DetailedERC20 {
  constructor(string _name, string _symbol, uint8 _decimals) 
    DetailedERC20(_name, _symbol, _decimals)
    public
  {

  }
}

/** NOrmal */

// contract NauhToken is MintableToken {
//   string public name = "Nauh Token";
//   string public symbol = "NAUH";
//   uint256 public decimals = 18;
// }
