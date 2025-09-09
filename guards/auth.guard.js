const { sendErrorResponse } = require("../helpers/send.errors.response");
const jwtService = require("../utils/jwt.service");



module.exports = async (req, res, next)=>{
    try{
        //guard logic
        const authHeader = req.headers.authorization
        if(!authHeader){
            return sendErrorResponse({message: "Auth header not found"}, res, 401)
        }
        console.log(authHeader);
        const token = authHeader.split("")[1];
        if(!token){
            return sendErrorResponse({message: "Token not found"})
        }

        const verifiedAccessToken = await jwtService.verifyAccessToken(token)
         
        req.admin = verifiedAccessToken;
        console.log(req);
        
        next()
    }catch(error){
        sendErrorResponse(error, res, 403)
    }
}