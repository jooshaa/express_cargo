const Client = require("../models/client");

const addClient = async (req, res) => {
    try {
        const { full_name, phone_number, email, address, location } = req.body
        const candidate = await Client.findOne({ where: { email } });
        if (candidate) {
            return res.status(403).send({ message: 'user already exists' })
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
    catch (e) {
        console.log(e);
        res.status(500).send({ error: e, message: 'error in adding' })
    }
};

const getClient = async (req, res) => {
    try {

        const client = await Client.findAll()

        res.status(201).send({
            message: "Client getted",
            data: client
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ error: e, message: 'error in getting' })
    }
};


const getClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findByPk(id)

        res.status(201).send({
            message: "Client getted",
            data: client
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ error: e, message: 'error in getting' })
    }
};

const updateClient = async (req, res) => {
    const { id } = req.params
    const body = req.body

    try {
        const [updated] = await Client.update(body, { where: { id } })

        if (updated) {
            const updatedClient = await Client.findByPk(id);
            return res.json(updatedClient);
        }

        return res.status(404).json({
            message: "Client not found"
        });
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}

const deleteClient = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Client.destroy({ where: { id } })

        if (!deleted) {
            return res.status(404).json({
                message: "Client not found"
            });
        }

        res.json({
            message: "deleted"
        })
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}


module.exports = {
    addClient,
    getClient,
    getClientById,
    updateClient,
    deleteClient

}