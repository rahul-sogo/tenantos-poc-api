const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.get('/roles', roleController.getRoles);
router.delete('/roles/:id', roleController.deleteRole);

module.exports = router;
