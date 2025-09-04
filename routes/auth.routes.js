const router = require('express').Router()
const { login, logout} = 
require("../controllers/auth.controller")


router.post('/login', login)
router.post('/logout', logout)
// router.get('/', getAdmins)
// router.patch('/:id', updateAdmin)
// router.delete('/:id', deleteAdmin)


module.exports = router;