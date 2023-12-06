const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
// db import 
require('./config/db.config')

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())   // cookie parser
app.use(cors())           // enable CORS

const ussdRoute = require('./routes/users.route')

app.use("/", ussdRoute)




app.listen(PORT, () => {
    console.log(`listening on ${PORT}.`)
})





