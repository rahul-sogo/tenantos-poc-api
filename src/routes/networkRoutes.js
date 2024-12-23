const express = require('express');
const router = express.Router();
const networkDeviceController = require('../controllers/networkDeviceController');

router.get('/networkDevices', networkDeviceController.getNetworkDevices);
router.post('/networkDevices/:networkDevice/actions/testConnectivity', networkDeviceController.testDeviceConnectivity);

module.exports = router;
