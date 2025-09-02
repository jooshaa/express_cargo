const router = require("express").Router()
const { addCurrency, updateCurrency, getCurrency, deleteCurrency 
} = require('../controllers/currency.controller')

router.post('/', addCurrency)
router.get('/', getCurrency)
router.patch('/:id', updateCurrency)
router.delete('/:id', deleteCurrency)

module.exports = router