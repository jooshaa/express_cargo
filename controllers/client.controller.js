const Client = require("../models/client");

const addClient = async (req, res)=>{
    try{
        const { full_name, phone_number, email, address, location} = req.body
        const candidate = await Client.findOne({where: {email}});
        if(candidate){
            return res.status(403).send({ message: 'user already exists'})
        }
        const newClient = await Client.create({
            full_name,
            phone_number,
            email,
            address,
            location
        });
        res.status(201).send({
            message: "New Client added",
            data: newClient
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send({error:e, message:'error in adding' })
    }
};

const getClient = async (req, res)=>{
    try{
       
        const client = await Client.findAll()
        
        res.status(201).send({
            message: "Client getted",
            data: client
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send({error:e, message:'error in getting' })
    }
};


const getClientById = async (req, res)=>{
    try{
        const {id} = req.params;
        const client = await Client.findByPk(id)
        
        res.status(201).send({
            message: "Client getted",
            data: client
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send({error:e, message:'error in getting' })
    }
};
module.exports = {
    addClient,
    getClient,
    getClientById
}