require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name recipe sad history guess enter army gather'; 
let testAccounts = [
"0x09c17213257592621e16478f8392747c7fd5140eb8ddad5ae5ec46862467e287",
"0x1929eaea616e6badc1732d249e0160802215ed5d36b5faadd5de8d8b2ed05648",
"0xefd85f08c062dd5150510388fce1aed225dbece9c0ccfb9766e8c998cdfe634b",
"0x1e890c13efcd502e50a4deb8f08e94eab2754e0348f286dcc9c09d0b42edc3ca",
"0x79a5f7b71daf25f9b9a96275181b11d19172b5323cd578b4569d3fd4d397a049",
"0x95eb49a536918038580a0f9a9f0ce3ad81d691a9494abfbcad35ee9554cdb0ff",
"0x75ae78d1f4aa820844462755880fb217f1bbb151842270becab9b9ab03212274",
"0xfe70b5367d23c494085f26742b989eb982e361b9d608df008cec628fcf557325",
"0xbf20d22da6f74f5d8be26d81e2a9ab9140d47ed2457b9d077e4e2b60b24b40df",
"0xb92ecb666412a1627bf3d7b537bc36794b4237a25e653355371b3cc2d79e1af5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
