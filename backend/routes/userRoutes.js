/*
contains the user routes
 */
const express=require('express');
const {Signup, Signin,Logout} =require('../controllers/userControl');
const { userAuth } = require('../middlewares/userAuth');

const userRouter=express.Router();

/*Signup route  */
userRouter.post('/signup',Signup);

/*Signin route */
userRouter.post('/signin',Signin);



/*Exporting router */
module.exports = userRouter
