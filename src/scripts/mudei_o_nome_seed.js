require('dotenv').config()

const databaseService = require('../services/database')
const { cipher } = require('../utils/cipher')
const { generateAuthToken } = require('../middlewares/auth')
  
async function seedDatabase() {

    const email = 'lucas.dolsan.1775@gmail.com'
    const token = generateAuthToken()
    const password = cipher('admin')

    const migrationQuery = `
        INSERT INTO User (email, password, token) VALUES('${email}', '${password}', '${token}');
    `
    await databaseService.run(migrationQuery)
}
seedDatabase()