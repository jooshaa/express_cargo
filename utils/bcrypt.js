const bcrypt = require('bcrypt')


function hashPass(password){
    const salt = 10
    return hashed = bcrypt.hashSync(password, salt)
}

function compareHash(hashed, password){
    return bcrypt.compareSync(password, hashed)
}


module.exports = {hashPass, compareHash}