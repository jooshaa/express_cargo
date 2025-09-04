const Client = require("../models/client");
const Order = require("../models/order");

const addOrder = async (req, res) => {
    try {
        const { product_link, quantity, sum, truck, description,clientId } = req.body
        
        const newOrder = await Order.create({
            product_link,
            quantity,
            sum,
            truck,
            description,
            clientId
        });
        res.status(201).send({
            message: "New Order added",
            data: newOrder
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ error: e, message: 'error in adding' })
    }
};

const getOrder = async (req, res) => {
    try {

        const client = await Order.findAll()

        res.status(201).send({
            message: "Order getted",
            data: client
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ error: e, message: 'error in getting' })
    }
};


const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Order.findByPk(id)

        res.status(201).send({
            message: "Order getted",
            data: client
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ error: e, message: 'error in getting' })
    }
};

const updateOrder = async (req, res) => {
    const { id } = req.params
    const body = req.body

    try {
        const [updated] = await Order.update(body, { where: { id } })

        if (updated) {
            const updatedOrder = await Order.findByPk(id);
            return res.json(updatedOrder);
        }

        return res.status(404).json({
            message: "Order not found"
        });
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Order.destroy({ where: { id } })

        if (!deleted) {
            return res.status(404).json({
                message: "Order not found"
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
    addOrder,
    getOrder,
    getOrderById,
    updateOrder,
    deleteOrder

}