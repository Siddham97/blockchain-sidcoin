const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('bf701ba7f7f6952ce2dd3ad2321ae8b1fa098c1f3084136b95a4218ab8691089');
const myWalletAddress = myKey.getPublic('hex');


let savjeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
savjeeCoin.minePendingTransaction(myWalletAddress);

console.log('\nBalance of Xavier is', savjeeCoin.getBalanceOfAddress(myWalletAddress));
