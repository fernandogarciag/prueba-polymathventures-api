module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize.define("reservation", {
    day: {
      type: Sequelize.DATEONLY,
    },
    restaurantId: {
      type: Sequelize.INTEGER,
      references: sequelize.restaurant,
      referencesKey: "id",
    },
  });

  return Reservation;
};
