const ContractKit = require('@celo/contractkit')
const kit = ContractKit.newKit(process.env.TEST_NET_ALFAJORES)

// 
const { checkUserAddress } = require('../controllers/users.controller')

// convert from wei
const convertFromWei = async(value) => {
    return kit.web3.utils.fromWei(value.toString(), 'ether')
}

// create wallet 
const createWallet = async() => {
    try {
        const wallet = await kit.web3.eth.accounts.create()
        console.log("=====", wallet)
        return wallet

    } catch(error) {
        console.log(error)
    }
}

//  get balance
const getBalance = async(userMSISDN) => {
    console.log("user phone number", userMSISDN)
    try {
        const user = await checkUserAddress(userMSISDN)
        let walletAddress = user[0].walletAddress

        // get cUSD balance
        const cusdTokenWrapper = await kit.contracts.getStableToken()
        let cusdBalance = await cusdTokenWrapper.balanceOf(walletAddress) // if 100000000000000000000 celo = 1
        cusdBalance = kit.web3.utils.fromWei(cusdBalance.toString(), 'ether')
        console.log("cusd balance", cusdBalance)

        // get celo balance 
        const celoTokenWrapper = await kit.contracts.getGoldToken()
        let celoBalance = await celoTokenWrapper.balanceOf(walletAddress)
        celoBalance = kit.web3.utils.fromWei(celoBalance.toString(), 'ether')

        return `END Your account Balance is: 
                cUSD: ${cusdBalance}
                Celo: ${celoBalance}`
    } catch (error) {
        console.log(error)
    }
}

// getting account details
const getAccountDetails = async(userMSISDN) => {
    const user = await checkUserAddress(userMSISDN)

    const accountAddress = user[0].walletAddress

    return `END youre phone number is: ${userMSISDN} and wallet address is: ${accountAddress}`
}

// transfer celo
const sendcUSD = async(sender, receiver, amount, privatekey) => {
    const weiTransferAmount = kit.web3.utils.toWei(amount.toString(), 'ether')
    // cusd wrapper to check if the user has enough balance
    const stableTokenWrapper = await kit.contracts.getStableToken()
    
    const senderBalance = await stableTokenWrapper.balanceOf(sender)
    if (amount > senderBalance) {
        console.log(`You don't have enough funds to fulfil request: ${ await convertFromWei(senderBalance)}`)
        return flase
    }
    console.info(
        `Sender balance of ${ await convertFromWei(senderBalance)} cUSD is Sufficient to fulfil ${ await convertFromWei(weiTransferAmount)} cUSD`
    )
    
    kit.addAccount(privatekey)
    const stableTokenContract = await kit._web3Contracts.getStableToken()
    const txObject = await stableTokenContract.methods.transfer(receiver, weiTransferAmount)
    const tx = await kit.sendTransactionObject(txObject, {from: sender})
    console.log("tx details", tx)
    const hash = await tx.getHash()
    console.info(`Transferred ${amount} dollars to ${receiver}. Hash: ${hash}`);

    return hash
} 


const transfercUSD = async (senderId, recipientId, amount) => {
    try {
    const user = await checkUserAddress(senderId)
    let senderInfo = user[0].walletAddress
    let senderKey = user[0].privateKey

    const userDoc = await checkUserAddress(recipientId)
    let receiverInfo = userDoc[0].walletAddress

    let cusdAmount = amount * 0.01

    return sendcUSD( `${senderInfo}`, `${receiverInfo}`, cusdAmount, senderKey)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createWallet, getBalance, transfercUSD, getAccountDetails }