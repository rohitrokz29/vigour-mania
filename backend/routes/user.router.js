const userRouter = require('express').Router();
/*
contains the user routes
 */
const {userAuth} = require('../middlewares/user.auth');
const {refreshAuth} =require('../middlewares/refresh.auth')

const { Signup,
    Signin,
    GetUser,
    UpdateUser,
    RefreshAuthToken,
    LogOut
} = require('../controllers/user.control');


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
