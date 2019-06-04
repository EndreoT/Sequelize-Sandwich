const db = require("../models");


exports.getAllBurgers = function (options) {
  return db.Burger.findAll(options);
}