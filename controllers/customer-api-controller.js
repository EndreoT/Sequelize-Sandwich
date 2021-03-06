const db = require("../models");


exports.getCustomers = async function (req, res) {
  const customers = await db.Customer.findAll(
    { include: [db.Burger] }
  )
  return res.json(customers);
}

// Get customer by id
exports.getCustomer = async function (req, res) {
  const customer = await db.Customer.findAll(
    {
      where: {
        id: req.params.customerId
      },
      include: [db.Burger]
    }
  )
  return res.json(customer)
}

exports.createCustomer = async function (req, res) {
  try {
    const newCustomer = await db.Customer.create({ name: req.body.name });
    return res.json(newCustomer);
  } catch (err) {
    return res.json(err);
  }
}
