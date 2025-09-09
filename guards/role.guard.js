const { sendErrorResponse } = require("../helpers/send.errors.response")

module.exports = function roleGuard(role=[]){
   return async (req, res, next)=>{
   console.log(role);
   
    try{
        if(!role){
            return sendErrorResponse({
                message: "role not found"}, res, 403)
        }
        if(role.includes(req.admin.role)){
            next()
        }
    
    }catch(error){
        sendErrorResponse(error, res, 403)
    }

   }

}


