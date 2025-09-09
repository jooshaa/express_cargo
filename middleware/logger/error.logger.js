const winston = require("winston");
const expressWinston = require("express-winston");

module.exports = function reqErrorLogger(){
      return(expressWinston.errorLogger({
          transports: [
            new winston.transports.File({filename: "log/error.log"})
          ],
          format: winston.format.combine(
            // winston.format.colorize(),
            winston.format.json()
          )
        }));
}

