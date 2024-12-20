const express = require('express');
const router = express.Router();
const systemController = require('../controllers/authController');

router.get('/system/settingsAfterLogin', systemController.getSettingsAfterLogin);

module.exports = router;
