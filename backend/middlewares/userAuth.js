const User=require('../models/user.model');
const jwt=require('jsonwebtoken');

 const userAuth=async (req,res,next)=>{
    const {authorization}=req.headers;
    //reading jwt token
    console.log(authorization)
    if(!authorization){
        return res.status(401).json({message:"Token not found"});
    }
    try{
        console.log(authorization.split(' ')[1])
        //finding if id obtained form token verification exists or not
        const {_id}=jwt.verify(authorization.split(' ')[1],process.env.ACCESS_JWT_SECRET);
        console.log({_id})
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
const refreshAuth=async (req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization){
        return res.status(401).json({message:"Refresh Token not found"});
    }
    try {
        const {_id}=jwt.verify(authorization.split(" ")[1],process.env.REFRESH_JWT_SECRET);
        const isExists=await User.findOne({_id}).select('_id');
        if(isExists){
            req._id=_id;
            next()
        }

    } catch (error) {
        return res.status(401).json({message:err.message});   
    }
}

module.exports={userAuth,refreshAuth}

