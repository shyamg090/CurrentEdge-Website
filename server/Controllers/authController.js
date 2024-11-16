const { User } = require("../Models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const signupController = async (req, res) => {

    const isUserPresent = await User.findOne({ email: req.body.email })

    if (isUserPresent) {
        res.json({
            msg: 'User is Already Present'
        })
        return;
    }

    const newUser = await new User(req.body);

    newUser.save();

    res.json({
        msg: 'User Saved Sucessfully'
    })
}

const signinController = async (req, res) => {

    const isUserPresent = await User.findOne({ email: req.body.email })

    if (!isUserPresent) {
        res.json({
            msg: 'User is Not Present!'
        })
    }

    const checkPwd = bcrypt.compareSync(req.body.password, isUserPresent.password);

    if (checkPwd) {
        const jwt_token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET);

        res.json({
            jwt_token,
            name: req.body.name
        });

    }else{
        res.json({
            msg : 'Wrong Password!!'
        });
    }
}

module.exports = { signinController, signupController };
