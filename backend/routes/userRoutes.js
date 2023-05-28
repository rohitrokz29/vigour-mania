const express=require('express');
const {Signup} =require('../controllers/userControl');

const router=express.Router();

router.get('/signup',Signup);


module.exports = router
