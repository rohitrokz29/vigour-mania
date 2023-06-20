const refreshTokenModel = require('../models/refreshToken.model');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const userAuth = async (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    //reading jwt token
    console.log(accessToken)

    if (!accessToken) {
        return res.status(401).json({ message: "Token not found" });
    }
    try {
        //finding if id obtained form token verification exists or not
        

        const result =  jwt.verify(accessToken, process.env.ACCESS_JWT_SECRET, async (err, result) => {
            //*if accessToken is expired creating a new accessToken
            if (err?.name === "TokenExpiredError") {
                const token = await refreshTokenModel.newAuthToken(req.cookies.refreshTokenId);
                /*
                 *token={refreshTokenId,newAccessToken}
                 */
                if (!token) {
                    req._id = null;
                    return;
                }

                const tokenVerified = jwt.verify(token.newAccessToken, process.env.ACCESS_JWT_SECRET)
                //*changing request accessToken in cookie
                req.cookies.accessToken = token.newAccessToken;
                //*changing response accessToken in cookie as the auth token is expired
                res.cookie('accessToken', token.newAccessToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                })
                req._id = tokenVerified._id
                return;
            }
            req._id = result?._id;
        });

        if (req._id) {

            const isExists = await User.findOne({ _id: req._id }).select('_id');
            if (isExists) {
                next();
                return;
            }
            req._id = null;
        }
        return res.status(401).json({ message: "Refresh Token expired" });
    }
    catch (err) {
        return res.status(401).json({ message: err.message });
    }
}



const refreshAuth = async (req, res, next) => {
    const { refreshTokenId } = req.cookies;

    if (!refreshTokenId) {
        return res
            .status(401)
            .json({ message: "Refresh Token not found" });
    }
    try {

        const isExists = await refreshTokenModel.findOne({ _id: refreshTokenId })
        if (isExists) {
            req.refreshTokenId = refreshTokenId
            next();
            return;
        }
        return res
            .status(401)
            .json({ message: "Refresh Token does not exist" });


    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
}

module.exports = { userAuth, refreshAuth }

