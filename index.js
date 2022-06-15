const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config()

const PORT = 3000 || process.env.PORT

const app = express()


mongoose.connect(
    process.env.MONGOURI, () => {
        console.log('connected to DB')
    }
)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})