/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
require('babel-register');
require('babel-polyfill');

var provider;
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = '';

if (!process.env.SOLIDITY_COVERAGE){
  provider = new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/',4)
}


module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 4600000
    },
    ropsten: {
      provider: provider,
      gas: 1828127,
      network_id: 3 // official id of the ropsten network
    },
    coverage: {
      host: "localhost",
      network_id: "*", 
      port: 8555,         
      gas: 0xfffffffffff, 
      gasPrice: 0x0
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
