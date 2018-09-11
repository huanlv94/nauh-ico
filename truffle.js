// require('dotenv').config();
// const HDWalletProvider = require('truffle-hdwallet-provider');

// const infuraProvider = network => providerWithMnemonic(
//   process.env.MNEMONIC || '',
//   `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
// );

// const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
//   new HDWalletProvider(mnemonic, rpcEndpoint);

// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
//   networks: {
//     development: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*" // eslint-disable-line camelcase
//     },
//     // kovan: {
//     //   provider: infuraProvider('kovan'),
//     //   gasPrice: 100000000000,
//     //   network_id: 42, // eslint-disable-line camelcase
//     // },
//     ropsten: {
//       provider: infuraProvider("ropsten"),
//       gasPrice: web3.toWei("20", "gwei"),
//       // from: process.env.DEPLOY_ADDR,
//       network_id: "3"
//     }
//   },
//   solc: {
//     optimizer: {
//       enabled: true,
//       runs: 200
//     }
//   },
//   mocha: {
//     useColors: true
//   }
// };


///////////////////// 2 deploy //////////////////////
require('dotenv').config();
const WalletProvider = require('truffle-wallet-provider')
const Wallet = require('ethereumjs-wallet')

const parsePrivateKey = privateKey => new Buffer(privateKey, "hex")

const getWalle = function (network) {
  let wallet;
  switch (network) {
    case 'ropsten':
      let ropstenPrivateKey = parsePrivateKey(process.env.ROPSTEN_PRIVATE_KEY)
      wallet = Wallet.fromPrivateKey(ropstenPrivateKey)
      break
    case 'rinkeby':
      let rinkebyPrivateKey = parsePrivateKey(process.env.RINKEBY_PRIVATE_KEY);
      wallet = Wallet.fromPrivateKey(rinkebyPrivateKey);
      break
    default:
      break
  }

  return wallet
}

const infuraProvider = function (network) {
  let wallet = getWalle(network)
  return new WalletProvider(wallet, `https://${network}.infura.io/`)
}

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: infuraProvider("ropsten"),
      gas: 4600000,
      gasPrice: 100000000000,
      network_id: "3"
    },
    rinkeby: {
      provider: infuraProvider("rinkeby"),
      // You can get the current gasLimit by running
      // truffle deploy --network rinkeby
      // truffle(rinkeby)> web3.eth.getBlock("pending", (error, result) =>
      //   console.log(result.gasLimit))
      gas: 4600000,
      gasPrice: 100000000000,
      network_id: "4"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  mocha: {
    useColors: true
  }
};
