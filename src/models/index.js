const credentials = require('../../settings/database')
const Sequelize = require('sequelize')
const path = require('path')
const db = {}

const sequelize = new Sequelize(
  credentials.database,
  credentials.username,
  credentials.password,
  credentials
)

const students = sequelize.import(
  path.join(__dirname, 'students.js')
)

db[students.name] = students

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
