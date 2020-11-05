const shortUrlRouter = require("express").Router();
const tinyUrl = require("tinyurl");
const validUrl = require('valid-url');
const customizedUrlValidator = require("../Validator/UrlValidator");
const protocols = ['http', 'https']; // we could modify protcols
const log4j = require('log4js');
const LOGGER = log4j.getLogger();
LOGGER.level = "debug";


shortUrlRouter.post("/", function (req, res) {
    let input_url = req.body.data.url;
    LOGGER.debug(`Recieving coming URL : ${input_url}`);
    if (customizedUrlValidator(input_url, protocols)){
        tinyUrl.shorten(input_url, function(result, error) {
            if (error){
                LOGGER.error(`New Error : ${error}`);
                res.status(422).send();
            }else{
                res.status(200).send(result);
            }
        });
    } else {
        LOGGER.error(`Invalid input URL`);
        res.status(422).send();
    }
})


module.exports = shortUrlRouter;