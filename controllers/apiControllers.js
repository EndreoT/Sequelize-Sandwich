const db = require("../models");
console.log(db)
// Routes =============================================================

exports.getAllBurgers = function (req, res) {
  db.undefined.Burger.findAll({}).then(function (result) {
    res.json(result);
  })
}


exports.createCustomer = function (req, res) {
  db.undefined.Customer.create({ name: req.body.name }).then(function (result) {
    res.json(result);
  })
}

// export async function getBurger(req: express.Request, res: express.Response) {
//   const burgerId: number = utils.convertToInteger(req.params.burgerId);

//   const burgerRes: BurgerData[] = await burger.selectOne(burgerId);
//   res.json(burgerRes);
// }

// export async function addBurger(req: express.Request, res: express.Response) {
//   const body = req.body;
//   const burgerName: string = body.burgerName;
//   const topping: string = body.topping;
//   const isDevoured: boolean = utils.convertStringToBoolean(body.devoured);

//   const result: any = await burger.insertOne(burgerName, topping, isDevoured);
//   res.json(result);
// }

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
