const express = require('express');
const htmlController = require('../controllers/htmlController');

const router= express.Router();

router.get('/', htmlController.getIndex);

module.exports = router;