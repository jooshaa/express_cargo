const router = require('express').Router()
const { addAdmin, getAdmins, updateAdmin, deleteAdmin } = 
require("../controllers/admin.controller")
const authGuard = require('../guards/auth.guard')
const creatorGuard = require('../guards/creator.guard')


router.post('/', addAdmin)//,
router.get('/', getAdmins)
router.patch('/:id', authGuard, creatorGuard ,updateAdmin)
router.delete('/:id', authGuard, creatorGuard, deleteAdmin)


module.exports = router

// authGuard, creatorGuard,