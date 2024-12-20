const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/system/settingsAfterLogin', authController.getSettingsAfterLogin);
router.get('/system/ui/settings', authController.getUiSettings);
router.get('/system/ui/uiLanguage', authController.getUiLanguage);
router.get('/system/ui/version', authController.getVersion);
router.get('/servers/:server_id/activitylog', authController.getActivityLog);

module.exports = router;
