/*
contains the user routes
 */
const express = require('express');
const {userAuth} = require('../middlewares/userAuth');
const { Signup,
    Signin,
    GetUser,
    UpdateUser,
    RefreshAuthToken,
    LogOut
} = require('../controllers/userControl');

const {refreshAuth} =require('../middlewares/refreshAuth')
const userRouter = express.Router();

//*SIGNUP ROUTE
userRouter.post('/signup', Signup);

//*SIGNIN ROUTE
userRouter.post('/signin', Signin);

// *LogOut Route 
userRouter.post('/logout',LogOut);

//*refresh auth token 
userRouter.post('/refresh', refreshAuth, RefreshAuthToken);

//*get User data for profile 
userRouter.get('/:username', GetUser)

//* updating user details  with granting access
userRouter.put('/edit/details', userAuth, UpdateUser);

//*Exporting router 
module.exports = userRouter
