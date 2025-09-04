const Operation = require("../models/operation");

const addOperation = async (req, res) => {
    try {
        const { operation_date, description, adminId  } = req.body
        // const candidate = await Operation.findOne({ where: { email } });
        // if (candidate) {
        //     return res.status(403).send({ message: 'user already exists' })
        // }
        const newOperation = await Operation.create({
            operation_date,
            description,
            adminId,
          
        });
        res.status(201).send({
            message: "New Operation added",
            data: newOperation
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ error: e, message: 'error in adding' })
    }
};

const getOperation = async (req, res) => {
    try {

        const client = await Operation.findAll()

        res.status(201).send({
            message: "Operation getted",
            data: client
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ error: e, message: 'error in getting' })
    }
};


const getOperationById = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Operation.findByPk(id)

        res.status(201).send({
            message: "Operation getted",
            data: client
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ error: e, message: 'error in getting' })
    }
};

const updateOperation = async (req, res) => {
    const { id } = req.params
    const body = req.body

    try {
        const [updated] = await Operation.update(body, { where: { id } })

        if (updated) {
            const updatedOperation = await Operation.findByPk(id);
            return res.json(updatedOperation);
        }

        return res.status(404).json({
            message: "Operation not found"
        });
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}

const deleteOperation = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Operation.destroy({ where: { id } })

        if (!deleted) {
            return res.status(404).json({
                message: "Operation not found"
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
    addOperation,
    getOperation,
    getOperationById,
    updateOperation,
    deleteOperation

}