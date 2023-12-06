const express = require('express')
const ContractKit = require('@celo/contractkit')

// import user controller
const { createUser, checkUserAddress } = require('../controllers/users.controller')
const { createWallet, getBalance, transfercUSD, getAccountDetails } = require('../services/generate-wallet')
const { getTxIdUrl } = require('../services/urls')

const kit = ContractKit.newKit(process.env.TEST_NET_ALFAJORES)
// console.log("connected to celo!!!!", kit)
const router = express.Router()

router.post("/", async(req, res, next) => {
    
    const { sessionId, serviceCode, phoneNumber, text } = req.body

    const footer = '\n0: Back 00: Home';
    let response = ""
    var data = text.split('*')

    if (text == "") {
        console.log(text)
        response = `CON Choose account information you want to view
        1. Create wallet 
        2. Account balance
        3. Trasnfer Celo
        4. Wallet details`
        
    } else if ( data[0] == "1" && data[1] == null ) {
        response+= `CON please enter your first name to create an account`
        response+= footer;
    } else if (data[0] == "1" && data[1] !== '') {

        const user = await checkUserAddress(phoneNumber)
        console.log("user details", user)
        
        // checks if the user address is available
        if (user.length <= 0) {
            first_name = data[1]
            const wallet = await createWallet()
            console.log("my name", first_name)
            console.log("wallet created", wallet)

            createUser({ firstName: first_name, phoneNumber, walletAddress: wallet.address, privateKey: wallet.privateKey })
            response = `END your wallet address and account created!!!`

        } else {
            response = "END wallet address already exist!!!"
        }
        
    } else if (text === "2") {
        response = await getBalance(phoneNumber)

    } else if (data[0] == "3" && data[1] == null) {
        response = `CON Please Enter Recipient` 
    } else if (data[0] == "3" && data[1] !== '' && data[2] == null) {
        response = `CON Please Enter Amount to send`
    } else if (data[0] == "3" && data[1] !== '' && data[2] !== '' ) {
        senderMSISDN = phoneNumber
        receiverMSISDN = '+254' + data[1].substring(1)
        console.log("receiver", receiverMSISDN)
        amount = data[2]

        response = `END you have sent` + amount + ` to ` + receiverMSISDN + `Celo Account`
        
        let promises = [];

        Promise.all(promises)
        .then(result => console.log(result))
        .then(() => transfercUSD(senderMSISDN, receiverMSISDN, amount))
        .then(hash => getTxIdUrl(hash))
        .then(url => {
            console.log("sender id", senderMSISDN)
        }).catch(error => console.log(error))

    } else if (text === "4"){
        response = await getAccountDetails(phoneNumber)
    }

    res.send(response);
})

module.exports = router