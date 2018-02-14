console.log("--- Connecting...");
var Web3 = require('web3');
var web3 = new Web3('http://localhost:7545');
console.log("--- Using web3 version: " + web3.version);
web3.eth.getAccounts().then(console.log);
