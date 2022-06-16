const router = require('express').Router()
const User = require('../models/User')

router.get('/register', async (req,res) => {

    const user = await new User({
        usermame: "John",
        email: "john@test.com",
        password: "12345"
    }),

    await user.save()
    res.send("Hiii")

})

module.exports = router