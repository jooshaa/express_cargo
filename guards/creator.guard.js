const { sendErrorResponse } = require("../helpers/send.errors.response")


module.exports = async(req, res, next)=>{
    try{
        if(!req.admin.is_creator){
            return sendErrorResponse({
                message: "you are not creator"}, res, 403)
        }
        next()
    }catch(error){
        sendErrorResponse(error, res, 403)
    }
}