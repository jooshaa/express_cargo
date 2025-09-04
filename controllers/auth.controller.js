const { sendErrorResponse } = require("../helpers/send.errors.response");
const Admin = require("../models/admin");
const { compareHash, hashPass } = require("../utils/bcrypt");
const jwtService = require("../utils/jwt.service");
const config = require("config")


const login = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const admin = await Admin.findOne({where: {email}});
        if(!admin){
            return sendErrorResponse({message: 'Email yoki password notugri'}, res, 401);
        }
        console.log('here');
                
        const isVerify = compareHash(admin.password, password)
        console.log(isVerify);
          
        if(!isVerify){
            return sendErrorResponse({message: 'Email yoki password notugri'}, res, 401);
        }
        const payload = {
            id: admin.id,
            email: admin.email,
            is_active: admin.is_active,
            is_creator: admin.is_creator,
        };
        const tokens = jwtService.generateTokens(payload);
        const hashedRefreshToken = await hashPass(tokens.refreshToken);
        admin.refreshToken = hashedRefreshToken;
        await admin.save();

        res.cookie("refreshToken", tokens.refreshToken, 
            {maxAge: config.get('cookie_refresh_token_time'),
             httpOnly: true});

        res.status(200).send({
            message: "Admin logged in",
            accessToken: tokens.accessToken,
        });
    }catch(error){
        sendErrorResponse(error, res, 500)
    }
}


const logout = async (req, res)=>{
    try{
        const {refreshToken} = req.cookies
        if(!refreshToken){
            return sendErrorResponse({message: 'cookie refresh token topilmadi'},
                 res, 500)}
        
        const verifiedRefreshToken = await jwtService.verifyAccessToken(refreshToken)

        const admin = await Admin.findByPk(verifiedRefreshToken.id)
        admin.refresh_token = null;
        await admin.save()

        res.clearCookie('refreshToken')
        res.send({
            message: "Admin logged out",
        });

    }catch(error){
         sendErrorResponse(error, res, 500)
    }
}

module.exports = {
    login,
    logout
}