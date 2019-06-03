const db = require("../models");


exports.getAllBurgers = function () {
  return db.Burger.findAll({});
}