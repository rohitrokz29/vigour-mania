const User=require('../models/user.model');
const jwt=require('jsonwebtoken');

 const userAuth=async (req,res,next)=>{
    const {authorization}=req.headers;
    //reading jwt token
    if(!authorization){
        return res.status(401).json({message:"Unauthorized User"});
    }
    try{
        //finding if id obtained form token verification exists or not
    const {_id}=jwt.verify(authorization.split(" ")[1],process.env.JWT_SECRET);
    const isExists=await User.findOne({_id}).select('_id');
    if(isExists){
        req._id=_id
        next();
    }
    }
    catch(err){
        return res.status(401).json({message:err.message});
    }
}

module.exports={userAuth}

