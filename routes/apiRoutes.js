const express = require('express');
const apiController = require('../controllers/apiControllers');

const router = express.Router();


router.get('/burgers', apiController.getAllBurgers);

router.get('/burgers/:burgerId', apiController.getBurger);

router.post('/burgers', apiController.addBurger);

router.put('/burgers/:burgerId', apiController.updateBurger);

router.delete('/burgers/:burgerId', apiController.deleteBurger);


router.get('/customers', apiController.getCustomers)

router.post('/customers', apiController.createCustomer)

module.exports = router;