const axios = require('axios');
const config = require('../config/config');

async function startReinstallation(req, res) {
    const { server } = req.params;
    try {
        const response = await axios.post(`${config.BASE_URL}/api/servers/${server}/provisioning/startReinstallation`, {}, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error starting reinstallation',
            error: error.message
        });
    }
}

async function stopReinstallation(req, res) {
    const { server } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server}/provisioning/stopReinstallation`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error stopping reinstallation',
            error: error.message
        });
    }
}

async function getInstallStatus(req, res) {
    const { server } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server}/provisioning/getInstallStatus`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching install status',
            error: error.message
        });
    }
}

module.exports = {
    startReinstallation,
    stopReinstallation,
    getInstallStatus
};
