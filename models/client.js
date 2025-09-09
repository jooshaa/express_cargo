const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')

const Social = sequelize.define('social', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    social_name: {
        type: DataTypes.STRING(32)
    },
    social_icon_file: {
        type: DataTypes.STRING(255)
    }

})

module.exports = Social