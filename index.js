const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require("helmet")
const dotenv = require('dotenv')

const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config()

const app = express()
const PORT = 3000 || process.env.PORT

mongoose.connect(
    process.env.MONGOURI, () => {
        console.log('connected to DB')
    }
)

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})