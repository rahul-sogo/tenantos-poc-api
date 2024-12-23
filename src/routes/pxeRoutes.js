const express = require('express');
const router = express.Router();
const pxeController = require('../controllers/pxeController');

router.get('/pxe/profiles', pxeController.getProfiles);
router.get('/pxe/disklayouts', pxeController.getDiskLayouts);
router.get('/pxe/scripts', pxeController.getScripts);

module.exports = router;
