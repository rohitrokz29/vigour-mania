const refreshTokenModel =require( "../models/refreshToken.model");
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

module.exports={refreshAuth}