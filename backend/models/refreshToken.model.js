const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
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
        return jwt.verify(refreshToken.refreshToken, process.env.REFRESH_JWT_SECRET, (err, result) => {
            
            if (err?.name === "TokenExpiredError") {
                //*if refresh token expired we delete the token
                this.deleteOne({ _id: refreshToken })
                return null;
            }
            return { refreshTokenId: refreshToken._id, userId: result._id };
        })
    } catch (error) {
        throw Error(error)
    }
}

module.exports = new mongoose.model('refreshTokens', refreshTokenSchema);

