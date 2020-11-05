const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shorUrlRouter = require("./Router/ShortUrlRouter");
const port = 8080;
const log4j = require('log4js');
const LOGGER = log4j.getLogger();
LOGGER.level = "debug";

app.use(express.static('./'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/shortUrl", shorUrlRouter);


app.listen(port, () => {
    LOGGER.debug(`Server is listening on port ${port}`);
});