const config = require("./config.js");
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: config.WEB_URL,
};

app.use(cors(corsOptions));

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});
require("./app/routes")(app);

// set port, listen for requests
app.listen(config.APP_PORT || 3000, () => {
  console.log(`App listening`);
});
