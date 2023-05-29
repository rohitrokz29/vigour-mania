/**
 Contains Controllers of user Routes for userRouter
 **/

const User = require('../models/user.model')
const jwt = require('jsonwebtoken');

/*
Creating token for user sessions
*/
const createToken =  (_id) => {
    return  jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "5d" });
}


/* Signup Controller function */
const Signup = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        //Signing up user //
        //below User.signup function exists in user model
        const user = await User.signup({ email, username, password });
        const token =  createToken(user._id);
        //user found -302
        res.status(302).json({ id: user._id, token });
    } catch (error) {
        //internal server error
        res.status(500).json({ message: error.message });
    }
}

/* Signin Controller function */
const Signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        //below User.signin function exists in user model

        const user=await User.signin({email,password});
        const token= createToken(user._id);
        //user found -302
        res.status(302).json({user:user,token:token});
    }
    catch(error){
        //internal server error
        res.status(500).json({message:error.message});
    }
}


module.exports = { Signup, Signin };