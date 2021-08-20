const dbConfig = require("../../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB_DATABASE,
  dbConfig.DB_USERNAME,
  dbConfig.DB_PASSWORD,
  {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.DB_CONNECTION,
    operatorsAliases: 0,
    pool: {
      max: parseInt(dbConfig.DB_POOL_MAX),
      min: parseInt(dbConfig.DB_POOL_MIN),
      acquire: parseInt(dbConfig.DB_POOL_ACQUIRE),
      idle: parseInt(dbConfig.DB_POOL_IDLE),
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.restaurants = require("./restaurant.model.js")(sequelize, Sequelize);
db.reservations = require("./reservation.model.js")(sequelize, Sequelize);

db.reservations.belongsTo(db.restaurants);

module.exports = db;
