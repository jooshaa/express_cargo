const router = require('express').Router()
const { addAdmin, getAdmins, updateAdmin, deleteAdmin } = 
require("../controllers/admin.controller")


router.post('/', addAdmin)
router.get('/', getAdmins)
router.patch('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)


module.exports = router