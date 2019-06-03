const Sequelize = require('sequelize');
const db = require("../models");
const utilFunctions = require('./utils')


exports.getAllBurgers = function (req, res) {
  utilFunctions.getAllBurgers(
    {
      include: [{
        model: db.Customer,
        include: {
          model: db.Customer,
          // include: [model: 'customers.id'] }
        }
        
    }]
      // where: {
      //   CustomerId: Sequelize.col('Customers.id')
      // },
      // include: [db.Customer]
    }
  ).then(response => {
    res.json(response);
  });
}

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


exports.getBurger = function (req, res) {
  const burgerId = req.params.burgerId;
  db.Burger.findAll({
    where: {
      id: burgerId
    }
  }).then(result => {
    res.json(result);
  })
}

exports.addBurger = function (req, res) {
  const body = req.body;
  const name = body.name;
  const devoured = body.devoured;
  const CustomerId = body.CustomerId;

  db.Burger.create({
    name,
    devoured,
    CustomerId,
  }).then(result => {
    res.json(result);
  })
}

exports.updateBurger = function (req, res) {
  // try {
  //   const body = req.body;
  //   const burgerId = utils.convertToInteger(req.params.burgerId);
  //   const burgerName = body.burgerName;
  //   const topping = body.topping;
  //   const devoured = utils.convertStringToBoolean(body.devoured);

  //   const result = await burger.updateOne(burgerId, burgerName, topping, devoured);
  //   res.json(result);

  // } catch (err) {
  //   console.log(err);
  // }
}

exports.deleteBurger = function (req, res) {
  const burgerId = req.params.burgerId;
  db.Burger.destroy({
    where: {
      id: burgerId
    }
  }).then(result => {
    res.json(result);
  })

}
