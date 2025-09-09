//1variant

// const winston = require('winston');

// const logger = winston.createLogger({
//     transports:[
//         new winston.transports.Console({level: "debug"})
//     ]
// })

// module.exports = logger

//2variant
// const { createLogger, format, transports } = require('winston');
// const { combine, timestamp, label, printf } = format;


// const logger = createLogger({
//     transports:[
//         new transports.Console({level: "debug"})
//     ]
// })

const winston = require("winston")
require("winston-mongodb")

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, prettyPrint, json, colorize } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    // colorize(),
    label({ label: 'express cargo' }),
    timestamp(),
    myFormat,
    //prettyPrint()
    json(),
  ),
  transports: [
    new transports.Console({level: "debug"}),
    new transports.File({filename: "log/error.log", level: "error"}),
    new transports.File({filename: "log/combine.log", level: "info"}),
    new transports.MongoDB({db:"mongodb://localhost:27017/mydb"})
  ],
});

logger.exitOnError = false;

logger.exceptions.handle(
    new transports.File({filename: 'log/exceptions.log'})
)

logger.rejections.handle(
    new transports.File({filename: 'log/rejections.log'})
)

module.exports = logger