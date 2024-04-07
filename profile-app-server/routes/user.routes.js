const express = require("express");
const router = express.Router();

const {isAuthenticated} = require('../middlewares/jwt.middleware');
const User = require('../models/User.model');

router.get('/users', isAuthenticated, (req,res, next) => {

    return res.json(req.payload);
});

router.put('/users', isAuthenticated, (req, res, next) => {
    const {image, username, campus, course} = req.body;

    if(image === ''){
        res.status(400).json({message:"Invalid image"});
        return;
    }

    const {user} = req.payload;
    user.image = image;

    User.findByIdAndUpdate(user._id, user)
        .then(updatedUser => {

        })
})


module.exports = router;