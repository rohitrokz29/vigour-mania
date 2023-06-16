/*
contains the user routes
 */
const express = require('express');
const {
    userAuth,
    refreshAuth
} = require('../middlewares/userAuth');
const { Signup,
    Signin,
    GetUser,
    UpdateUser,
    RefreshAuthToken
} = require('../controllers/userControl');


const userRouter = express.Router();

/*Signup route  */
userRouter.post('/signup', Signup);

/*Signin route */
userRouter.post('/signin', Signin);

/*refresh auth token */
userRouter.post('/refresh', refreshAuth, RefreshAuthToken);

/*get User data for profile */
userRouter.get('/:username', GetUser)

/* updating user details  with granting access*/
userRouter.put('/edit-details', userAuth, UpdateUser);
/*Exporting router */
module.exports = userRouter
