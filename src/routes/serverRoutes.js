const express = require('express');
const router = express.Router();
const serverController = require('../controllers/serverController');

router.get('/servers', serverController.getServers);

module.exports = router;
