const router = require("express").Router()
const { addClient, getClient, updateClient, deleteClient, getClientByQuantity    
 } = require("../controllers/client.controller")

 
router.post("/", addClient)
router.get("/", getClient)
router.get('/p', getClientByQuantity)
router.patch('/:id', updateClient)
router.delete('/:id', deleteClient)

module.exports = router;



