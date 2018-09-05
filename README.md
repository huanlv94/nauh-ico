# Sample crowdsale starter project

This is a sample project for getting started with a custom crowdsale contract with [OpenZeppelin](https://openzeppelin.org/). It is an introductory example to learn how to use OpenZeppelin. Note that this project has not been audited and hence **is not intended for production use**.

The `contracts` folder has a sample crowdsale and token, with explicit points on where to override its behaviour.

## Setup

1- Install [nodejs and npm](https://docs.npmjs.com/getting-started/installing-node)

2- Clone the project by running `git clone git@github.com:lehuan94cntt/nauh-crowdsale.git`

3- Change directory into the project via `cd nauh-crowdsale`

4- Install dependencies by running `npm install`

5- Install dapp-scratch: `npm install -g dapp-scratch`

6- Build contract module for JS FW: `dapp-scratch build NauhCrowdsale --contract './contracts/NauhCrowdsale.sol'`

7- Flatten your contract: `https://github.com/poanetwork/solidity-flattener`

## Tests

Tests are run via `npm test`. There are some pending tests waiting for you to implement the missing features, and make sure to write a test for every new feature you add!

## Docs

Check out the API docs for OpenZeppelin [here](https://openzeppelin.org/api/docs/open-zeppelin.html). 

The Crowdsale contract [docs](https://openzeppelin.org/api/docs/crowdsale_Crowdsale.html) docs and [source](https://github.com/OpenZeppelin/zeppelin-solidity/blob/v1.6.0/contracts/crowdsale/Crowdsale.sol) may be particularly helpful in this project!

## Bonus

```
  /*
  * To use ./contracts/NauhCrowdsale.sol just import it into your project:
  */

  const ./contracts/NauhCrowdsale.sol = require('./dapp-module/NauhCrowdsale/index.js')
  let undefined = new ./contracts/NauhCrowdsale.sol()
  undefined.helloWorld()

  /*
  * Have Fun : )
  */
 ```
