module.exports = (app) => {
  var router = require("express").Router();

  const restaurants = require("../controllers/restaurant.controller.js");
  router.post("/restaurants/", restaurants.create);
  router.get("/restaurants/", restaurants.findAll);
  router.get("/restaurants/:id", restaurants.findOne);
  router.put("/restaurants/:id", restaurants.update);
  router.delete("/restaurants/:id", restaurants.delete);

  const reservations = require("../controllers/reservation.controller.js");
  router.post("/reservations/", reservations.create);
  router.get("/reservations/", reservations.findAll);
  router.get("/reservations/:id", reservations.findOne);
  router.put("/reservations/:id", reservations.update);
  router.delete("/reservations/:id", reservations.delete);

  app.use("/api", router);
};
