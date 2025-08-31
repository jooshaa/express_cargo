const router = require("express").Router()
const { addCurrency } = require('../controllers/currency.controller')

router.post('/', addCurrency)

module.exports = router