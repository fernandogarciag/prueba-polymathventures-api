module.exports = (sequelize, Sequelize) => {
  const Restaurant = sequelize.define("restaurant", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
  });

  return Restaurant;
};
