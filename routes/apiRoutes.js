const express = require('express');
const burgerController = require('../controllers/burger-api-controller');
const customerController = require('../controllers/customer-api-controller')

const router = express.Router();


router.get('/burgers', burgerController.getAllBurgers);

router.get('/burgers/:burgerId', burgerController.getBurger);

router.post('/burgers', burgerController.addBurger);

router.put('/burgers/:burgerId', burgerController.updateBurger);

router.delete('/burgers/:burgerId', burgerController.deleteBurger);

router.put('/burgers/devour/:burgerId', burgerController.devourBurger);


router.get('/customers', customerController.getCustomers)

router.get('/customers/:customerId', customerController.getCustomer)

router.post('/customers', customerController.createCustomer)

module.exports = router;