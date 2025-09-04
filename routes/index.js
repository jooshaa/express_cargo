const router = require('express').Router()

const clientRoute = require('./client.routes')
const currencyRoute = require('./currency.routes')
const adminRoute = require('./admin.routes')
const authRouter = require('./auth.routes')

router.use("/client", clientRoute)
router.use('/currency', currencyRoute)
router.use('/admin', adminRoute)
// router.use('/operation')
router.use('/auth', authRouter)

module.exports = router


