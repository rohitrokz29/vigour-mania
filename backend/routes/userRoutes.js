/*
contains the user routes
 */
const express=require('express');
const {Signup, Signin, GetUser} =require('../controllers/userControl');
const { userAuth } = require('../middlewares/userAuth');

const userRouter=express.Router();

/*Signup route  */
userRouter.post('/signup',Signup);

/*Signin route */
userRouter.post('/signin',Signin);

/*get User data for profile */
userRouter.get('/:username',GetUser)
/*Exporting router */
module.exports = userRouter
