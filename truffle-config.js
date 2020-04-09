require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember social good enroll swallow slam'; 
let testAccounts = [
"0x71206acd7c3649e8d2650cc59ff2f5dffa83ee4006b6140e90b4551ffee86f5a",
"0xd2859ccade4d85db9fbc3125e92f7e149121d5bf20416dfde5017e06a8153795",
"0x8186d0426695ed60f71b6dc437e69f5889ac9a255be09c462bf3eec1a7026259",
"0x7a2f7449fb5d92fbfffa952907ea0d3f0a852387eff9d3f80f90ef0c3336a595",
"0x2c0e166c6fe1db7abc81c022d3feb2e98757d7db530c81ea1747b7e32cae20b1",
"0x679aa0d735b0e85461541c4dd3655b6d970e2c52950192eda5a0423617885657",
"0x9a94a2b7ed6b10d54333e5e3ace145d2f8ddd7ec8c178a282d208ee45ba3c4f2",
"0x194fe253b53237980f236b5435532851d688eefdfc26a3a404deff0111494642",
"0xeb83fb769b2b69abbc7a3cecc29aef6717d97ea23e121a5ffdaf2fb94e97bd33",
"0x366a75139a1ab8d881b61757ee5ba669933ad27de4f73d75c22fdb879d07faae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
