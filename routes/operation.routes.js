const router = require("express").Router()
const { addOperation, getOperation, updateOperation, deleteOperation
} = require('../controllers/operation.controller')



router.post('/', addOperation)
router.get('/', getOperation)
router.patch('/:id', updateOperation)
router.delete('/:id', deleteOperation)

module.exports = router