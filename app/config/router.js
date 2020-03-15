const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const individualController = require('../controllers/individualController');
router.post('/registerUser', userController.create);
router.post('/addExpense', individualController.add);
module.exports = router;
