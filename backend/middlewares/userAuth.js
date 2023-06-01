const User=require('../models/user.model');
const jwt=require('jsonwebtoken');

 const userAuth=async (req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization){
        return res.status(401).json({message:"Unauthorized User"});
    }
    try{

    const {_id}=jwt.verify(authorization.split(" ")[1],process.env.JWT_SECRET);
    req.user=await User.findOne({_id}).select('_id');
    next();
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}

module.exports={userAuth}

