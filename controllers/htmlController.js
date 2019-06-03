const utilFunctions = require('./utils')


exports.getIndex = function (req, res) {
  utilFunctions.getAllBurgers().then(context => {
    res.render('index', { burgers: context });
  });

}