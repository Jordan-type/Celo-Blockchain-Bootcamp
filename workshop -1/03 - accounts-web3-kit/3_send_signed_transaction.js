const Web3 = require('web3')
const contractKit = require('@celo/contractkit')
require('dotenv').config()

// RPC URL
const web3 = new Web3(process.env.CELO_TEST_RPC_URL)
const kit = contractKit.newKitFromWeb3(web3)

// account1 & account2 address 
const accountAddress1 = '0x3a0c14a7a3e7d7c3e2b4b5b5b5b5b5b5b5b5b5b5'
const accountAddress2 = '0x3a0c14a7a3e7d7c3e2b4b5b5b5b5b5b5b5b5b5b5'

// privateKey 1 and 2
const privateKey1 = '0x3a0c14a7a3e7d7c3e2b4b5b5b5b5b5b5b5b5b5b5'
const privateKey2 = '0x3a0c14a7a3e7d7c3e2b4b5b5b5b5b5b5b5b5b5b5'

// get transaction count using celo kit
const getTransactionCount = async () => {
    const transactionCount = await kit.web3.eth.getTransactionCount(accountAddress1)
    console.log("Transaction Count", transactionCount)
}

getTransactionCount()

// get transaction count using web3
const getTransactionCountWeb3 = async () => {
    const transactionCount = await web3.eth.getTransactionCount(accountAddress1)
    console.log("Transaction Count", transactionCount)
}

getTransactionCountWeb3()


// build the transation with celo kit
const buildTransaction = async () => {
    const txObject = {
        from: accountAddress1,
        to: accountAddress2,
        value: web3.utils.toWei('1', 'ether')
        }

        




    }