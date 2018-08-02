import web3 from './web3';



// ****************
// Need to replace address and abi with correct address and abi for this project



//address and abi were acquired by running node deploy.js file from the lottery project
// copied and pasted the address and abi here
// if getting an error when deploying possibly use npm rebuild
const address = '0xe9d56F732029AA782527aFA6F5D118a4cA544764';

const abi = [{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];


// we are going to create a local contract instance (local copy) of the blockchain contract using the address and abi
// this will be a JS object that only exists in our browser that functions like a representation of our blockchain deployed contract
// now lottery.js is exporting a copy of our contract that we can work with on the react/frontend of our codebase
export default new web3.eth.Contract(abi, address);

//now we can use methods on lottery like we used in the lottery folder/projects test file