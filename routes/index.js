const router = require('express').Router()

const clientRoute = require('./client.routes')
const currencyRoute = require('./currency.routes')

router.use("/client", clientRoute)
router.use('/currency', currencyRoute)

module.exports = router


