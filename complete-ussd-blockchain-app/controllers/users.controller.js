const User = require('../models/users.model')

exports.createUser = ({ firstName, phoneNumber, walletAddress, privateKey }) => {
    const newUser = new User({ firstName, phoneNumber, walletAddress, privateKey })

    newUser.save(function(error){
        console.log(error)
    })
}

exports.checkUserAddress = async(phoneNumber) => {
    try {
        const user =  await User.find({ phoneNumber })
        return user

    } catch(error){
        console.log(error, "user available!!!")
    }
}


