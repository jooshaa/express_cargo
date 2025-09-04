
const {addOrder, getOrder, updateOrder, deleteOrder} = require("../controllers/order.controller")

router.post('/', addOrder)
router.get('/', getOrder)
router.patch('/:id', updateOrder)
router.delete('/:id', deleteOrder)

module.exports = router