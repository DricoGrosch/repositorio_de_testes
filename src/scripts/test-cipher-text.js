require('dotenv').config()

const User = require('../models/User')

async function test() {
    const token = await User.login('lucas.dolsan.1775@gmail.com', 'admin', 'sing2000')
    console.log(token);
}

test()
 