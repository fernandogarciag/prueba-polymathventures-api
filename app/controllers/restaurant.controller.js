const db = require("../models");
const Restaurant = db.restaurants;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (
    !req.body.name &&
    !req.body.description &&
    !req.body.address &&
    !req.body.city &&
    !req.body.url
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const restaurant = {
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    city: req.body.city,
    url: req.body.url,
  };
  Restaurant.create(restaurant)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Restaurant.",
      });
    });
};

exports.findAll = (req, res) => {
  Restaurant.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Restaurant.findByPk(id)
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
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Restaurant.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Restaurant.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};
