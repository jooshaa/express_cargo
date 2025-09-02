const router = require('express').Router()

const clientRoute = require('./client.routes')
const currencyRoute = require('./currency.routes')
const adminRoute = require('./admin.routes')

router.use("/client", clientRoute)
router.use('/currency', currencyRoute)
router.use('/admin', adminRoute)

module.exports = router


