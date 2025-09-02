const sequlize = require("../config/db")
const { DataTypes } = require("sequelize")


const Admin = sequlize.define('admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    full_name: {
        type: DataTypes.STRING(50),
    },
    user_name:{
        type: DataTypes.STRING(72),
    },
    password:{
        type: DataTypes.STRING(72),
    },
    phone_number: {
        type: DataTypes.STRING(18),
        unique: true,
    },
    email:{
        type: DataTypes.STRING(32),
        unique: true,
    },
    tg_link:{
        type: DataTypes.STRING(72),
    },
    token:{
        type: DataTypes.STRING(92),
    },
    is_creator:{
        type: DataTypes.BOOLEAN,
    },
    is_active:{
       type: DataTypes.BOOLEAN,
    },
    description:{
        type: DataTypes.TEXT,
    }
});



module.exports = Admin