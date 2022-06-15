const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = 3000 || process.env.PORT



mongoose.connect(
    process.env.MONGOURI, () => {
        console.log('connected to DB')
    }
)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})