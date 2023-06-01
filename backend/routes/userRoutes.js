/*
contains the user routes
 */
const express=require('express');
const {Signup, Signin} =require('../controllers/userControl');
const { userAuth } = require('../middlewares/userAuth');

const userRouter=express.Router();

/*Signup route  */
userRouter.post('/signup',Signup);

/*Signin route */




/*********
 * 
 * 
 SOME PROBLEM IN SIGNIN* 
 * 

 */
userRouter.post('/signin',Signin);
// userRouter.use(userAuth);

/*Exporting router */
module.exports = userRouter
