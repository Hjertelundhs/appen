const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize(process.env.db, process.env.user, process.env.password, {
    host: '127.0.0.1' || process.env.host,
    dialect: 'mysql',
    
    operatorsAliases: false,

    pool:   {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db