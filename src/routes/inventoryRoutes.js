const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/inventorycomponents', inventoryController.getComponents);
router.get('/inventorycomponents/customfields', inventoryController.getCustomFields);

module.exports = router;
