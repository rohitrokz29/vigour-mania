const refreshTokenModel = require('../models/refreshToken.model');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const userAuth = async (req, res, next) => {
    const { accessToken } = req.cookies;
    //reading jwt token
    if (!accessToken) {
        return res.status(401).json({ message: "Token not found" });
    }
    try {
        //finding if id obtained form token verification exists or not
        
        const { _id } = jwt.verify(accessToken, process.env.ACCESS_JWT_SECRET);

        const isExists = await User.findOne({ _id }).select('_id');
        if (isExists) {
            req._id = _id
            next();
        }
    }
    catch (err) {
        return res.status(401).json({ message: err.message });
    }
}
const refreshAuth = async (req, res, next) => {
    const { refreshToken } = req.cookies;
    console.log(refreshToken)
    if (!refreshToken) {
        return res.status(401).json({ message: "Refresh Token not found" });
    }
    try {

        const isExists = await refreshTokenModel.findOne({ _id :refreshToken})
        if (isExists) {
            req.refreshTokenId=refreshToken
            next()
        }

    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
}

module.exports = { userAuth, refreshAuth }

