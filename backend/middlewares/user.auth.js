const refreshTokenModel = require('../models/refreshToken.model');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const userAuth = async (req, res, next) => {

    const accessToken = req.cookies.accessToken;
    //reading jwt token

    if (!accessToken) {
        return res.status(401).json({ message: "Token not found" });
    }
    try {
        //finding if id obtained form token verification exists or not

        const result=jwt.verify(accessToken,process.env.ACCESS_JWT_SECRET)
        if (result) {

            const isExists = await User.findOne({ _id: result._id }).select('_id');

            if (isExists) {
                req._id=isExists._id
                next();
                return;
            }
        }
        return res.status(401).json({ message: "Refresh Token expired" });
    }
    catch (err) {
        return res.status(401).json({ message: err.message });
    }
}



module.exports = { userAuth }

