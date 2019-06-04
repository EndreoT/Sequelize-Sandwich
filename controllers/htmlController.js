const utilFunctions = require('./utils')
const db = require('../models')

exports.getIndex = function (req, res) {
  utilFunctions.getAllBurgers({include: [db.Customer]}).then(context => {
    res.render('index', { burgers: context });
  });

}