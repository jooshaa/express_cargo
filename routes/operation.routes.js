const router = require("express").Router()
const { addOperation, getOperation, updateOperation, deleteOperation
} = require('../controllers/operation.controller')
const authGuard = require('../guards/auth.guard')

const roleGuard = require("../guards/role.guard")


router.post('/', addOperation)
router.get('/',  getOperation)//roleGuard("Creator"),
router.patch('/:id', updateOperation)
router.delete('/:id', deleteOperation)

module.exports = router