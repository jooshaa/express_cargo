const router = require('express').Router()

const clientRoute = require('./client.routes')
const currencyRoute = require('./currency.routes')
const adminRoute = require('./admin.routes')
const authRouter = require('./auth.routes')
const operationRouter = require('./operation.routes')
const orderRouter = require('./order.routes')

router.use("/client", clientRoute)
router.use('/currency', currencyRoute)
router.use('/admin', adminRoute)
router.use('/operation', operationRouter)
router.use('/auth', authRouter)
router.use('/order', orderRouter)

module.exports = router


