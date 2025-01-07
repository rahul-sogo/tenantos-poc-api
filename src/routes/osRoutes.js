const express = require('express');
const router = express.Router();
const osController = require('../controllers/osController');

router.post('/servers/:server/provisioning/startReinstallation', osController.startReinstallation);
router.get('/servers/:server/provisioning/stopReinstallation', osController.stopReinstallation);
router.get('/servers/:server/provisioning/getInstallStatus', osController.getInstallStatus);
router.get('/servers/:server/provisioning/getProfiles',osController.getServerProfiles);

module.exports = router;
