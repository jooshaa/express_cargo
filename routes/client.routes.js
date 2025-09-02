const router = require("express").Router()
const { addClient, getClient, updateClient, deleteClient    
 } = require("../controllers/client.controller")
 
router.post("/", addClient)
router.get("/", getClient)
router.patch('/:id', updateClient)
router.delete('/:id', deleteClient)

module.exports = router;



