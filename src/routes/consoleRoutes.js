const express = require('express');
const router = express.Router();
const consoleController = require('../controllers/consoleController');

router.get('/servers/:server/console/start', consoleController.startConsole);

module.exports = router;
