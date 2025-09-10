
const express = require('express')
const config = require('config')
const Sequelize = require('./config/db')
const indexRoute = require("./routes/index")
const cookieParser = require('cookie-parser')
const errorHandling = require('./middleware/errors/error.handling')
const logger = require('./service/logger.service')
// var winston = require('winston'),
// expressWinston = require('express-winston');
const reqLogger = require('./middleware/logger/req.logger')
const reqErrorLogger = require('./middleware/logger/error.logger')
const exHbs = require("express-handlebars")


require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
// logger.log(process.env.NODE_ENV);
// logger.log(process.env.secret);
// logger.log(config.get('secret'));'


logger.log("info","LOG malumotlari")
logger.error("error malumotlari")
logger.debug("debug malumotlari")
logger.info("info malumotlari")

// console.trace("trace malumotlari")
// console.table([1,2,3])
// console.table([["ali" , 1], ["vali" , 3], ["mali" , 4]])

const PORT = config.get("port") ?? 3001

process.on("uncaughtException", (exception)=>{
    logger.log("uncaughtException", exception.message);
})
process.on('unhandledRejection', (reject)=>{
    logger.log('unhandledRejection', reject)
})

const app = express()
app.use(express.json())
app.use(cookieParser())

//  app.use(expressWinston.logger({
//       transports: [
//         new winston.transports.Console()
//       ],
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.json()
//       ),
//       meta: true, // optional: control whether you want to log the meta data about the request (default to true)
//       msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
//       expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
//       colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
//       ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
//     }));

app.use(reqLogger())

const hbs = exHbs.create({
    defaultLayout: "main",
    extname: "hbs",
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

//serve static
app.use(express.static("views"))// read


app.use('/api', indexRoute)

app.use(reqErrorLogger())
//   app.use(expressWinston.errorLogger({
//       transports: [
//         new winston.transports.Console()
//       ],
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.json()
//       )
//     }));
app.use(errorHandling)

const start = async () => {
    const client = new MongoClient(url);
    await client.connect();
    await Sequelize.authenticate()
    await Sequelize.sync({ alter: true })
    try {
        app.listen(PORT, () => {
            logger.log(`server started at: http://localhost:${PORT}`);

        })
    }
    catch (er) {
        logger.log(er);
    }
}

start()

