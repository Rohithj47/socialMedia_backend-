const router = require("express").Router()
const usercontroller = require('../controllers/userController')

// Get a User  
router.get('/', usercontroller.getUser)
// Update User 
router.put('/:id', usercontroller.updateUser)
// Delete User 
router.delete('/:id', usercontroller.deleteUser)
// Folloow a User 
router.put('/:id/follow', usercontroller.followUser)
// Unfollow a User 
router.put('/:id/unfollow', usercontroller.unfollowUser)

module.exports = router