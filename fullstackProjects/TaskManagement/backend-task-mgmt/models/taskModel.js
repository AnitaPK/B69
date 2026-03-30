const{Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../config/db')
const Task = sequelize.define("Task",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING
    },
    priority:{
        type:DataTypes.STRING
    },
    startDate:{
        type:DataTypes.DATE
    },
    endDate:{
        type:DataTypes.DATE
    }
},{
    timestamps:true,
    tableName:'tasks'
})

module.exports = Task