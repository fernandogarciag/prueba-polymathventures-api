const config = require("./config.js");
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: config.ORIGIN_URL,
};

app.use(cors(corsOptions));

const db = require("./app/models");
db.sequelize.sync();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
require("./app/routes")(app);

// set port, listen for requests
app.listen(config.APP_PORT, () => {
  console.log(`App listening on port ${config.APP_PORT}`);
});
