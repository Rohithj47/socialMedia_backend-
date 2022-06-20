const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports.updateUser = [
    (req, res) => {
        // check if user can update or nor 
        if( req.params.id === req.body.userId || req.user.isAdmin){
            if(req.body.password){
                try
                {
                const salt = bcrypt.genSalt(10)
                req.body.password = bcrypt.hash(req.body.password, salt)
                }
                catch(err){ res.status(500).json(err) }
            }
            User.findByIdAndUpdate( req.params.id, { $set: req.body }, (err, user) => {
                if(err || !user) { res.status(500).json({ error: "User not Updated" }) }
                res.status(200).json(user)
            })
        }
        else {
            res.status(500).json({ error: "no auth to edit user" })
        }
    }

]