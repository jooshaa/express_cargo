const express = require('express')
const config = require('config')
const Sequelize = require('./config/db')
const indexRoute = require("./routes/index")

const PORT = config.get("port") ?? 3001

const app = express()
app.use(express.json())

app.use('/api', indexRoute)


const start = async () => {
    await Sequelize.authenticate()
    await Sequelize.sync({ alter: true })
    try {
        app.listen(PORT, () => {
            console.log(`server started at: http://localhost:${PORT}`);

        })
    }
    catch (er) {
        console.log(er);
    }
}

start()

