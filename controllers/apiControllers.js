const db = require("../models");
const utilFunctions = require('./utils')


exports.getAllBurgers = async function (req, res) {
  utilFunctions.getAllBurgers().then(response => {
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


// export async function getBurger(req: express.Request, res: express.Response) {
//   const burgerId: number = utils.convertToInteger(req.params.burgerId);

//   const burgerRes: BurgerData[] = await burger.selectOne(burgerId);
//   res.json(burgerRes);
// }

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

// export async function updateBurger(req: express.Request, res: express.Response) {
//   try {
//     const body = req.body;
//     const burgerId: number = utils.convertToInteger(req.params.burgerId);
//     const burgerName: string = body.burgerName;
//     const topping: string = body.topping;
//     const devoured: boolean = utils.convertStringToBoolean(body.devoured);

//     const result: any = await burger.updateOne(burgerId, burgerName, topping, devoured);
//     res.json(result);

//   } catch (err) {
//     console.log(err);
//   }
// }

// export async function deleteBurger(req: express.Request, res: express.Response) {
//   const burgerId: number = utils.convertToInteger(req.params.burgerId);

//   const result: any = await burger.deleteOne(burgerId);
//   res.json(result);
// }
