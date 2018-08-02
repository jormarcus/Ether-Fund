import Web3 from 'web3';

// we make a new instance of web3, but we want it to use the provider from the metamask browser injected version of web3(older version of web3) (accessed by doing window.web3 because web3 is always running in the browser when metamask is installed)
// we want to take the provider (currentProvider) from the metamask version and give it to our (newer version) instance of web3
// the provider has been preconfigured to connect to the rinkby test network and has access to all of our account addresses, public/private keys and anything else we would want
const web3 = new Web3(window.web3.currentProvider);

export default web3;