const router = require("express").Router()
const authcontroller = require('../controllers/userController')

// Update User 
router.put('/:id', authcontroller.updateUser)

module.exports = router