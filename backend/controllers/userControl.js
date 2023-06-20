/**
 Contains Controllers of user Routes for userRouter
 **/

const User = require('../models/user.model')
const RefreshToken = require('../models/refreshToken.model')

const {
    CreateAccessToken,
    CreateRefreshToken
} = require('./tokens/createTokens')

/**Options */
const cookieOptions = {
    httpOnly: true,
    secure:true,
    sameSite:"none",
    // secure: process.env.NODE_ENV === 'production',
    expires:new Date(Date.now()+24*3600*1000)
};


/* Signup Controller function */
const Signup = async (req, res) => {
    try {
        //*Signing up user //
        //*below User.signup function exists in user model
        const user = await User.signup(req.body);
        //*user found -302
        
        const accessToken = CreateAccessToken(user._id);
        const refreshToken = CreateRefreshToken(user._id);
        //*token created
        const newRefreshTokenId = await RefreshToken.newRefreshToken(refreshToken)
        //*refreshToken  stored
        const refreshTokenExpiry=Date.now()+5*24*60*60*1000;
        const authTokenExpiry=Date.now()+24 * 60 * 60 * 1000

        //*sending auth token and refresh token in the cookies
        res
            .cookie("accessToken",  accessToken, cookieOptions)
            .cookie("refreshTokenId", newRefreshTokenId, cookieOptions)
            .status(201)
            .json({ username: user.username, _id: user._id ,refreshTokenExpiry,authTokenExpiry});

    } catch (error) {
        //*internal server error
        res.status(400).json({ message: error.message });
    }
}
//* Signin Controller function */
const Signin = async (req, res) => {
    try {
        //*below User.signin function exists in user model
        const user = await User.signin(req.body);

        const accessToken = CreateAccessToken(user._id);
        const refreshToken = CreateRefreshToken(user._id);
        const newRefreshTokenId = await RefreshToken.newRefreshToken(refreshToken)
        const refreshTokenExpiry=Date.now()+ 5 * 24 * 60 * 60 * 1000;
        const authTokenExpiry=Date.now()+ 24 * 60 * 60 * 1000

        //*user found -302
        //*sending auth token and refresh token in the cookies
        console.log(accessToken)
          res
            .cookie('accessToken', accessToken, cookieOptions)
            .cookie('refreshTokenId', newRefreshTokenId, cookieOptions)
            .status(201)
            .json({ username: user.username, _id: user._id ,refreshTokenExpiry,authTokenExpiry});
    }
    catch (error) {
        //*internal server error
        res.status(500).json({ message: error });
    }
}
/*
*LogOut Controller
*/
const LogOut = async (req, res) => {
    try {
        const result = await RefreshToken.deleteToken(req.cookies.refreshTokenId);
        console.log(result)

        //*checking if refresh token is deleted or not 
        if (result.acknowledged=== true) {
            //*if refresh token deleted clearing tokens in cookies
            return res
                .clearCookie('accessToken',cookieOptions)
                .clearCookie('refreshTokenId',cookieOptions)
                .status(200)
                .json({ message: "Successfully Logged Out" })
        }
        return res.status(400).json("LogOut Falied")
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/*
* Refreshing User Token
*/
const RefreshAuthToken = async (req, res) => {
    try {
        //*refreshing a auth token i.e., creating a new auth token 
        const token = await RefreshToken.newAuthToken(req.refreshTokenId)
        /*
         *token={refreshTokenId,newAccessToken} 
         */
        if (token) {
            const authTokenExpiry=Date.now()+24 * 60 * 60 * 1000;
            //*refresh or changing the auth token
            return res
                .cookie('accessToken', token.newAccessToken, cookieOptions)
                .cookie('refreshTokenId', token.refreshTokenId, cookieOptions)
                .status(200)
                .json({ message: "New Token Created" ,authTokenExpiry});
        }
        //*if refresh token does not exist or expired we logout the user 
        return res
        .clearCookie('accessToken')
        .clearCookie('refreshTokenId')
        .status(401)
        .json({message:"Refresh Token Expired"})

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/*
* Controller function to acces user Profile
 */
const GetUser = async (req, res) => {
    try {
        const user = await User.findUser(req.params);
        const { charts } = user;
        /*
          *  we have charts=[
           *     {
           *         data:[{week,value}]
           *     },
           *     {
           *         data:[{week,value}]
           *     },
           *     {
           *         data:[{week,value}]
           *     }
           * ]
           * we need to send charts data as
           * charts =[
           *     {week:week,value1:value1,value2:value2,value3:value3,....}..value3->belong to 3rd graph on week=week 1
           *        {week:week,value1:value1,value2:value2,value3:value3,....}..value3->belong to 3rd graph on week=week 2
           *     {week:week,value1:value1,value2:value2,value3:value3,....}..value3->belong to 3rd graph on week=week 3 
           *     {week:week,value1:value1,value2:value2,value3:value3,....}..value3->belong to 3rd graph on week=week 4
           * ]
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
/*
* Controller function to update user Profile details 
*/
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
    RefreshAuthToken,
    LogOut
};