module.exports = {
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  port: process.env.DB_PORT || 3306,
  dialect: 'mysql',
  database: process.env.DB_NAME || 'codenation_students'
}
