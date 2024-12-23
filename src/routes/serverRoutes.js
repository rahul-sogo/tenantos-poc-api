const express = require('express');
const router = express.Router();
const serverController = require('../controllers/serverController');

router.get('/servers', serverController.getServers);
router.get('/servers/:id', serverController.getServerById);
router.put('/servers/:id', serverController.updateServer);
router.delete('/servers/:id', serverController.deleteServer);
router.get('/servers/:server_id/ipassignments', serverController.getIpAssignments);
router.get('/servers/:server_id/inventory', serverController.getInventory);
router.get('/servers/:server_id/comments', serverController.getComments);
router.get('/servers/:server_id/activitylog', serverController.getActivityLog);
router.get('/servers/tags', serverController.getTags);
router.get('/servers/:server_id/connections', serverController.getConnections);
router.get('/servers/:server_id/hwsummary', serverController.getHwSummary);
router.post('/servers', serverController.createServer);
router.get('/servers/:server_id/ipassignments/getAssignableSubnets',serverController.getAssignableSubnets)

module.exports = router;
