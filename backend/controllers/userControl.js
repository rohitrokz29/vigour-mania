/**
 Contains Controllers of user Routes for userRouter
 **/

const User = require('../models/user.model')
const jwt = require('jsonwebtoken');

/*Create Tokens */
const CreateToken=(_id)=>{

    const accessToken = jwt.sign({ _id}, process.env.ACCESS_JWT_SECRET, { expiresIn: '1d' });
    const refreshToken = jwt.sign({ _id }, process.env.REFRESH_JWT_SECRET, { expiresIn: '2d' })
    return {accessToken,refreshToken}
}

/* Signup Controller function */
const Signup = async (req, res) => {
    try {
        //Signing up user //
        //below User.signup function exists in user model
        const user = await User.signup(req.body);
        const {accessToken,refreshToken}=CreateToken(req._id);
        //user found -302

        res.status(201).json({ username: user.username, _id: user._id, accessToken, refreshToken });
    } catch (error) {
        //internal server error
        res.status(400).json({ message: error.message });
    }
}
/* Signin Controller function */
const Signin = async (req, res) => {
    try {
        //below User.signin function exists in user model
        const user = await User.signin(req.body);
        const {accessToken,refreshToken}=CreateToken(req._id);
        //user found -302
        res.status(201).json({ username: user.username, _id: user._id, accessToken, refreshToken });
    }
    catch (error) {
        //internal server error
        res.status(500).json({ message: error.message });
    }
}

/*
Refreshing User Token
*/
const RefreshAuthToken =async (req,res)=>{
    try {
        const user = await User.signin(req.body);
        const {accessToken,refreshToken}=CreateToken(req._id);
        res.status(201).json({ username: user.username, _id: user._id, accessToken, refreshToken });
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }
}

/* Controller function to acces user Profile */
const GetUser = async (req, res) => {
    try {
        const user = await User.findUser(req.params);
        const { charts } = user;
        /*
            we have charts=[
                {
                    data:[{week,value}]
                },
                {
                    data:[{week,value}]
                },
                {
                    data:[{week,value}]
                }
            ]
            we need to send charts data as
            charts =[
                {week:week,value1:value1,value2:value2,value3:value3,....}..value3->belong to 3rd graph on week=week 1
                   {week:week,value1:value1,value2:value2,value3:value3,....}..value3->belong to 3rd graph on week=week 2
                {week:week,value1:value1,value2:value2,value3:value3,....}..value3->belong to 3rd graph on week=week 3 
                {week:week,value1:value1,value2:value2,value3:value3,....}..value3->belong to 3rd graph on week=week 4

            ]
        */
        var maxWeek = -Infinity;
        for (const chart of charts) {
            for (const dataObj of chart.data) {
                if (dataObj.week > maxWeek) {
                    maxWeek = dataObj.week;
                }
            }
        }
        let newCharts = [];
        let chartTypes = [];
        charts.map(item => {

            chartTypes.push({ chartType: item.chartType, length: item.data.length })
        })
        for (var i = 1; i <= maxWeek; i++) {
            const obj = { week: i };
            charts.map((item, index) => {
                var data = item.data.find(item => item.week === i)
                obj[`value${index}`] = data ? data.value : null;
            })
            newCharts.push(obj)
        }
        user ? res.status(200).json({ user: user.user, charts: newCharts, chartTypes }) : res.status(302).json({ message: "User Not found" })
    } catch (error) {
        res.json({ message: error.message })
    }
}
/* Controller function to update user Profile details */
const UpdateUser = async (req, res) => {
    try {
        const isUpdated = await User.updateUser({ body: req.body, _id: req._id });
        res.status(200).json({ isUpdated: isUpdated.acknowledged });
    }
    catch (error) {
        res.status(304).json({ message: error });
    }
}


module.exports = {
    Signup,
    Signin,
    GetUser,
    UpdateUser,
    RefreshAuthToken
};