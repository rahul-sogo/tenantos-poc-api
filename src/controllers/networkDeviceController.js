const axios = require('axios');
const config = require('../config/config');

async function getNetworkDevices(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/networkDevices`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching network devices',
            error: error.message
        });
    }
}

async function testDeviceConnectivity(req, res) {
    const { networkDevice } = req.params;
    try {
        const response = await axios.post(`${config.BASE_URL}/api/networkDevices/${networkDevice}/actions/testConnectivity`, {}, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error testing device connectivity',
            error: error.message
        });
    }
}

module.exports = {
    getNetworkDevices,
    testDeviceConnectivity
};
