const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user', userController.getCurrentUser);
router.get('/users', userController.getAllUsers);

module.exports = router;
