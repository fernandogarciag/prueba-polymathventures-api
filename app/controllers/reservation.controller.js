const db = require("../models");
const Reservation = db.reservations;
const Restaurant = db.restaurants;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.day && !req.body.restaurantId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const reservation = {
    day: req.body.day,
    restaurantId: req.body.restaurantId,
  };

  Reservation.create(reservation)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Reservation.",
      });
    });
};

exports.findAll = (req, res) => {
  Reservation.findAll({
    include: {
      model: Restaurant,
      required: true,
    },
    order: [["day", "ASC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reservations.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Reservation.findByPk(id)
    .then((data) => {
      if (data === null) {
        res.status(400).send({
          message: "Empty!",
        });
        return;
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Reservation with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Reservation.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Reservation was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Reservation with id=${id}. Maybe Reservation was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Reservation with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Reservation.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Reservation was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Reservation with id=${id}. Maybe Reservation was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Reservation with id=" + id,
      });
    });
};
