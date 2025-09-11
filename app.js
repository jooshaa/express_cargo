
const express = require('express')
const config = require('config')
const Sequelize = require('./config/db')
const indexRoute = require("./routes/index")
const cookieParser = require('cookie-parser')
const errorHandling = require('./middleware/errors/error.handling')
const exHbs = require("express-handlebars")
const viewsRoute = require("./routes/views.routes")

const PORT = config.get("port") ?? 3001


const app = express()
app.use(express.json())
app.use(cookieParser())
const hbs = exHbs.create({
    defaultLayout: "main",
    extname: "hbs",
})
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');
//serve static
app.use(express.static('views'))

app.use('/', viewsRoute)
app.use('/api', indexRoute)


app.use(errorHandling)

const start = async () => {
    await Sequelize.authenticate()
    await Sequelize.sync({ alter: true })
    try {
        app.listen(PORT, () => {
            console.log(`server started at: http://localhost:${PORT}`);

        })
    }
    catch (er) {
        logger.log(er);
    }
}

start()

