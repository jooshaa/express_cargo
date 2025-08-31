const router = require("express").Router()
const { addClient, getClient } = require("../controllers/client.controller")
 
router.post("/", addClient)
router.get("/", getClient)

module.exports = router;



