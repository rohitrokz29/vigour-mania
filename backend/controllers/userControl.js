const User=require('../models/user.model')

const Signup=async (req,res)=>{
    const {email,password,username}=req.body;
    try {
        const user= await User.signup({email,username,password});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message:error.message});
    }

}

module.exports={Signup};