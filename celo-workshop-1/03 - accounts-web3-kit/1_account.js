const Web3 = require('web3')
const contractKit = require('@celo/contractkit')
require('dotenv').config()

// RPC URL
const web3 = new Web3(process.env.CELO_TEST_RPC_URL) // https//:sepolia....

const kit = contractKit.newKitFromWeb3(web3)

// account address
const accountAddress = '0x3a0c14a7a3e7d7c3e2b4b5b5b5b5b5b5b5b5b5b5'

// // create wallet address using contract kit 
// const account = kit.web3.eth.accounts.create()
// console.log("Wallet account generation Kit", account)

// // create wallet address using web3
// const acc = web3.eth.accounts.create()
// console.log("Wallet account generation Web3", acc)

// Wallet account generation Kit {
//     address: '0x36d4afE1eE5FbB079D74d41163fc2d3787613509',
//     privateKey: '0xa7e2ea0b1444d850c1a67ef48b70348b1ac76ee0d59106fa8380df74f4498342',
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt]
//   }
//   Wallet account generation Web3 {
//     address: '0x787dE828E9B55E462999Cf75Debd70d7F1E60Ea1',
//     privateKey: '0xd7077157e1291fd2e64e8c8a0d1918a4e079d0f97e51f8ca6e6dd7edde0db166', prefix = 0x (public and private key) 
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt]
//   }

// account.privateKey
const privateK1 = '0xa7e2ea0b1444d850c1a67ef48b70348b1ac76ee0d59106fa8380df74f4498342'
// acc.privateKey
const privateK2 = '0xd7077157e1291fd2e64e8c8a0d1918a4e079d0f97e51f8ca6e6dd7edde0db166'
  

// convert private key to address with contract kit
const account2 = kit.web3.eth.accounts.privateKeyToAccount(privateK1)
console.log("Private key to address Celo Kit", account2)

// convert private key to address with web3
const acc2 = web3.eth.accounts.privateKeyToAccount(privateK2)
console.log("Private key to address Web3", acc2)

// const importWalletAddress = async ( privateKey ) => {
//     const account = kit.web3.eth.accounts.privateKeyToAccount(privateKey)
//     console.log("Private key to address Celo Kit", account)
// }


// get account balance using celo contratkit 
const getBalance = async () => {
    const balance = await kit.web3.eth.getBalance(accountAddress)
    console.log("Account Balance", balance)
}


getBalance()

// get account balance using web3
const getBalanceWeb3 = async () => {
    const balance = await web3.eth.getBalance(accountAddress)
    console.log("Account Balance", balance)
}

getBalanceWeb3()





