
const { error } = require('console')
const Currency = require('../models/currency_type')

const addCurrency = async (req, res)=>{
    try{
        const values = {name: req.body.name, description: req.body.description}
        const newCurrency = await Currency.create(values)
        res.status(201).json({
            data: newCurrency,
            message: 'created'
        })

    }
    catch(e){
        res.status(400).json({
            error: e,
            message: "error in adding"
        })
    }    
}

const getCurrency = async (req, res) =>{
    try{
        
    }
    catch(e){
        res.status(400).json({
            error: e,
            message: 'error in getting'
        })
    }
}

module.exports = {
    addCurrency
}