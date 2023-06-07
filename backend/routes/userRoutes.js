/*
contains the user routes
 */
const express=require('express');
const {Signup, Signin, GetUser,UpdateUser,UpdateCharts,AddChart,GetCharts} =require('../controllers/userControl');
const { userAuth } = require('../middlewares/userAuth');

const userRouter=express.Router();

/*Signup route  */
userRouter.post('/signup',Signup);

/*Signin route */
userRouter.post('/signin',Signin);

/*get User data for profile */
userRouter.get('/:username',GetUser)

/* updating user details  with granting access*/
userRouter.put('/edit-details',userAuth,UpdateUser);
/*Exporting router */
module.exports = userRouter
