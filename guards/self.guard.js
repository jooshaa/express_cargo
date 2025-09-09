const { sendErrorResponse } = require("../helpers/send.errors.response")


module.exports = async(req, res, next)=>{
    try{
        if(req.params.id != req.admin.id && req.admin.is_creator){
            return sendErrorResponse({
                message: "faqat shaxsiy molumot korish mumkin"}, res, 403)
        }

        next()
    }catch(error){
        sendErrorResponse(error, res, 403)
    }
}