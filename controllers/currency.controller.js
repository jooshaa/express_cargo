const Currency = require('../models/currency_type')
console.log('currenc')
const addCurrency = async (req, res) => {
    try {
        const values = { name: req.body.name, description: req.body.description }
        const newCurrency = await Currency.create(values)
        res.status(201).json({
            data: newCurrency,
            message: 'created'
        })

    }
    catch (e) {
        res.status(400).json({
            error: e,
            message: "error in adding"
        })
    } 
}

const getCurrency = async (req, res) => {
    try {
        const data = await Currency.findAll()

        res.status(201).send({
            message: "currency_type getted",
            data: data
        });
    }
    catch (e) {
        res.status(400).json({
            error: e,
            message: 'error in getting'
        })
    }
}


const updateCurrency = async (req, res) => {
    try {
        const body = req.body
        const { id } = req.params
        const [updated] = await Currency.update(body, { where: { id } })

        if (updated) {
            const updatedCurrency = await Currency.findByPk(id);
            return res.json(updatedCurrency);
        }

        return res.status(404).json({
            message: "Currency not found"
        });
    }
    catch (e) {
        res.status(400).json({
            error: e,
            message: "error in updating"
        })
    }

}


const deleteCurrency = async (req, res) => {
    const { id } = req.params
    try {
        const deleted = await Currency.destroy({ where: { id } })

        if (!deleted) {
            return res.status(404).json({
                message: "Currency not found"
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
    addCurrency,
    getCurrency,
    updateCurrency,
    deleteCurrency
}