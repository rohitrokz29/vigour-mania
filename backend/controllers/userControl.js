/**
 Contains Controllers of user Routes for userRouter
 **/

const User = require('../models/user.model')
const jwt = require('jsonwebtoken');

/*
Creating token for user sessions
*/
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "5d" });
}


/* Signup Controller function */
const Signup = async (req, res) => {
    try {
        //Signing up user //
        //below User.signup function exists in user model
        const user = await User.signup(req.body);
        const token = createToken(user._id);
        //user found -302
        res.status(201).json({ username: user.username, _id: user._id, token });
    } catch (error) {
        //internal server error
        res.status(400).json({ message: error.message });
    }
}
/* Signin Controller function */
const Signin = async (req, res) => {
    try {
        console.log(req.body)
        //below User.signin function exists in user model
        const user = await User.signin(req.body);
        const token = createToken(user._id);
        //user found -302
        res.status(201).json({ username: user.username, _id: user._id, token: token });
    }
    catch (error) {
        //internal server error
        res.status(500).json({ message: error.message });
    }
}

/* Controller function to acces user Profile */
const GetUser = async (req, res) => {
    try {
        const user = await User.findUser(req.params);
        user ? res.status(200).json(user.user) : res.status(302).json({ message: "User Not found" })
    } catch (error) {
        res.json({ message: error.message })
    }
}
/* Controller function to update user Profile details */
const UpdateUser = async (req, res) => {
    try {
        const isUpdated = await User.updateUser({ body: req.body, _id: req._id });
        res.status(200).json({ isUpdated: isUpdated.acknowledged });
    }
    catch (error) {
        res.status(304).json({ message: error });
    }
}

const AddChart=async (req,res)=>{
    // adding first time chart to a user account
    try {
        const chartRes=await User.addChart({body:req.body,_id:req._id});
        res.json(chartRes)
    } catch (error) {
        res.json(error)
    }

}

const UpdateCharts = async (req, res) => {
    //Update chart details
    try {
        const {chartType}=req.params;
        const isUpdated=await User.updateChart({body:req.body,_id:req._id,chartType});
        res.json(isUpdated)
    } catch (error) {
        res.json(error)
    }
}

module.exports = { Signup, Signin, GetUser, UpdateUser, UpdateCharts, AddChart };