const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    firstName: String,
    phoneNumber: String, 
    walletAddress: String,
    privateKey: String 
})

module.exports = mongoose.model('Users', userSchema)