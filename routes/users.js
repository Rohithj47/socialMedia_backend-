const router = require("express").Router()
const usercontroller = require('../controllers/userController')

// Update User 
router.put('/:id', usercontroller.updateUser)
// Delete User 
router.delete('/:id', usercontroller.deleteUser)
// Folloow a User 
router.put('/:id/follow', usercontroller.followUser)
// Get a User  
router.get('/:id', usercontroller.getUser)
// Unfollow a User 
router.put('/:id/unfollow', usercontroller.unfollowUser)

module.exports = router