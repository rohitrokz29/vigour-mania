const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { CreateAccessToken } = require('../controllers/tokens/createTokens');
/*
*Mongoose model to store refresh token
 */
const refreshTokenSchema = new mongoose.Schema({
    refreshToken: {
        type: String,
        required: true
    }
}, {
    collection: "refreshTokens"
})

/*
 *creating a new refresh token  
 */
refreshTokenSchema.statics.newRefreshToken = async function newRefreshToken(token) {
    try {
        const newToken = await new this({ refreshToken: token });
        let { _id } = await newToken.save();
        return _id
    } catch (error) {
        throw Error(error)
    }
}
/*
 *deleting the  refersh token on logout 
 */
refreshTokenSchema.statics.deleteToken = async function deleteToken(_id) {
    try {
        const result = await this.deleteOne({ _id });
        return result;
    } catch (error) {
        throw Error(error)
    }
}


/*
 *creating a new auth token 
 */
refreshTokenSchema.statics.newAuthToken = async function newAuthToken(refreshTokenId) {
    if (!refreshTokenId) {
        return null;
    }
    try {

        /*
         *finding refresh token 
         *result ={
        *_id,refreshToken  
        *} 
         */
        const refreshToken = await this.findOne({ _id: refreshTokenId });
        if(refreshToken){
            return await jwt.verify(refreshToken.refreshToken, process.env.REFRESH_JWT_SECRET, async (err, result) => {

                if (err?.name === "TokenExpiredError") {
                    //*if refresh token expired we delete the token
                   await  this.deleteOne({ _id: refreshTokenId })
                    return null;
                }  
                //* if refresh token exists/not expired creating a new auth token
                const newAccessToken = CreateAccessToken(result._id);
                return { refreshTokenId: refreshToken?._id, newAccessToken};
            })
        }
        return null;
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = new mongoose.model('refreshTokens', refreshTokenSchema);

