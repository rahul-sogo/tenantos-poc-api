const axios = require('axios');
const config = require('../config/config');

async function getRemoteAgents(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/remoteAgents`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching remote agents',
            error: error.message
        });
    }
}

async function testConnectivity(req, res) {
    const { agentId } = req.params;
    try {
        const response = await axios.post(`${config.BASE_URL}/api/remoteAgents/${agentId}/actions/testConnectivity`, {}, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error testing connectivity',
            error: error.message
        });
    }
}

async function getIpmiKvmIsos(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/remoteAgents/ipmiKvmIsos`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching IPMI KVM ISOs',
            error: error.message
        });
    }
}

module.exports = {
    getRemoteAgents,
    testConnectivity,
    getIpmiKvmIsos
};
