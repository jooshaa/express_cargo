const Admin = require('../models/admin')
const bcrypt = require('../utils/bcrypt')

const addAdmin = async (req, res)=>{
    const body = req.body
    const hashedPassword = bcrypt.hashPass(body.password)
    body.password = hashedPassword
    try{
        const NewAdmin = await Admin.create(body)
        
        res.status(201).send({
            message: "New Admin added",
            data: NewAdmin
        });

    }
    catch(e){
        res.status(400).json({
            error: e.message})
    }
}

const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll({
      attributes: { exclude: ["password", "token"] }
    })
    res.json(admins)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

const updateAdmin = async (req, res)=>{
   try{
     const {id} = req.params
    const body = req.body

    if(body.password){
        body.password = bcrypt.hashPass(body.password)
    }

    const [update] = Admin.update(body, {where: {id}})

    if (!update) return res.status(404).json({ message: "Admin not found" })

    const updated = await Admin.findByPk(id, {
        attributes: {exclude: ["password", "token"]}
    })
    res.json({
      message: "Admin updated",
      data: updated
    })
   }
   catch(e){
       res.status(400).json({ error: e.message })
   }
}


const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Admin.destroy({ where: { id } })

    if (!deleted) return res.status(404).json({ message: "Admin not found" })

    res.json({ message: "Admin deleted successfully" })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

module.exports = {
    addAdmin,
    getAdmins,
    updateAdmin,
    deleteAdmin
}