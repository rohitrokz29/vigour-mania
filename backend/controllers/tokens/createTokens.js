
const jwt = require('jsonwebtoken');

//*Create Auth Tokens  For Signin and Signup
const CreateAccessToken = (_id) => {
    const accessToken = jwt.sign({ _id }, process.env.ACCESS_JWT_SECRET, { expiresIn: '1m' });
    return accessToken
}

//*Refresh Token to refresh auth token when expired
const CreateRefreshToken = (_id) => {
    const refreshToken = jwt.sign({ _id }, process.env.REFRESH_JWT_SECRET, { expiresIn: '5m' })
    return refreshToken;
}

module.exports={
    CreateAccessToken,
    CreateRefreshToken
}