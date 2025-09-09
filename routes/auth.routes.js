const router = require('express').Router()
const { login, logout, refreshToken} = 
require("../controllers/auth.controller")


router.post('/login', login)
router.post('/logout', logout)
router.post('/refresh', refreshToken)
// router.get('/', getAdmins)
// router.patch('/:id', updateAdmin)
// router.delete('/:id', deleteAdmin)


module.exports = router;