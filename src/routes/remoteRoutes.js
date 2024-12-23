const express = require('express');
const router = express.Router();
const remoteAgentController = require('../controllers/remoteAgentController');

router.get('/remoteAgents', remoteAgentController.getRemoteAgents);
router.post('/remoteAgents/:agentId/actions/testConnectivity', remoteAgentController.testConnectivity);
router.get('/remoteAgents/ipmiKvmIsos', remoteAgentController.getIpmiKvmIsos);

module.exports = router;
