const db = require("../models");
// const utilFunctions = require('./utils')


exports.getAllBurgers = function (req, res) {
  db.Burger.findAll({include: [db.Customer]}
  ).then(response => {
    res.json(response);
  });
}

exports.getBurger = function (req, res) {
  const burgerId = req.params.burgerId;
  db.Burger.findAll({
    where: {
      id: burgerId
    },
    include: [db.Customer]
  }).then(result => {
    res.json(result);
  })
}

exports.addBurger = function (req, res) {
  // const body = req.body;
  // const burger = {  
  //   name: body.name,
  //   devoured: body.devoured,
  //   CustomerId: body.CustomerId,

  // }
  const body = req.body;
  const name = body.name;
  const devoured = body.devoured;
  const CustomerId = body.CustomerId;

  db.Burger.create({
    name,
    devoured,
    CustomerId
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
