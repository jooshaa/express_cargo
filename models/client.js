const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const Client = sequelize.define('client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    full_name: {
        type: DataTypes.STRING(50),
    },
    phone_number: {
        type: DataTypes.STRING(18),
        unique: true,
    },
    email:{
        type: DataTypes.STRING(32),
        unique: true,
    },
    address:{
        type: DataTypes.STRING,
    },
    location:{
        type: DataTypes.STRING(32),
    },
    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

});



module.exports = Client;