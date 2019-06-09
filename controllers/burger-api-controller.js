const db = require("../models");
const utilFunctions = require('./utils')


exports.getAllBurgers = async function (req, res) {
  const burgers = await utilFunctions.getAllBurgers(
    {
      include: [db.Customer]
    }
  );

  return res.json(burgers);
}

// Get single burger by id
exports.getBurger = async function (req, res) {
  const burgerId = req.params.burgerId;
  const burger = await db.Burger.findAll(
    {
      where: {
        id: burgerId
      },
      include: [db.Customer]
    }
  );
  return res.json(burger)
}

// Create burger
exports.addBurger = async function (req, res) {
  const body = req.body;
  const burger = {
    name: body.name,
  }
  try {
    const newBurger = await db.Burger.create(burger);
    return res.json(newBurger);
  } catch (err) {
    return res.json(err)
  }
}

exports.updateBurger = async function (req, res) {

  const body = req.body;
  const id = req.params.burgerId;
  const burger = {
    name: body.name,
    devoured: body.devoured,
    CustomerId: body.CustomerId,
  }
  try {
    const updatedBurger = await db.Burger.update(
      burger,
      {
        where: {
          id,
        }
      });
    return res.json(updatedBurger);

  } catch (err) {
    res.json(err);
  }
}

// assign customer id to burger and set burger devoured property to true
exports.devourBurger = async function (req, res) {
  try {
    const id = req.params.burgerId;
    const CustomerId = req.body.CustomerId;

    const updatedBurger = await db.Burger.update(
      {
        devoured: true,
        CustomerId, 
      },
      {
        where: {
          id,
        }
      });
    return res.json(updatedBurger);

  } catch (err) {
    console.log(err);
  }
}

exports.deleteBurger = async function (req, res) {
  const burgerId = req.params.burgerId;
  try {
    const deletedBurger = await db.Burger.destroy(
      {
        where: {
          id: burgerId
        }
      }
    );
    return res.json(deletedBurger);
  } catch (err) {
    console.log(err)
  }
}
