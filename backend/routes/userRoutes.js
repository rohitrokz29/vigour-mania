/*
contains the user routes
 */
const express=require('express');
const {Signup, Signin, GetUser,UpdateUser,UpdateCharts,AddChart} =require('../controllers/userControl');
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

/* adding charts with first data */
userRouter.put('/add-chart',userAuth,AddChart);

/* updating charts data */
userRouter.put('/update-chart-data/:chartType',userAuth,UpdateCharts);
/*Exporting router */
module.exports = userRouter
