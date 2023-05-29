/*
contains the user routes
 */
const express=require('express');
const {Signup, Signin} =require('../controllers/userControl');

const userRouter=express.Router();

/*Signup route  */
userRouter.post('/signup',Signup);

/*Signin route */
userRouter.post('/signin',Signin);

/*Exporting router */
module.exports = userRouter
