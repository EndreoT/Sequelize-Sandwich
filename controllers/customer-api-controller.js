const db = require("../models");

exports.getCustomers = function (req, res) {
  db.Customer.findAll({}).then(function (result) {
    res.json(result);
  })
}

exports.createCustomer = function (req, res) {
  db.Customer.create({ name: req.body.name }).then(function (result) {
    res.json(result);
  })
}
