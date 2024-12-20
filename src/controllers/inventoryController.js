const axios = require('axios');
const config = require('../config/config');

async function getComponents(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/inventorycomponents`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching inventory components',
            error: error.message
        });
    }
}

async function getCustomFields(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/inventorycomponents/customfields`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching custom fields',
            error: error.message
        });
    }
}

module.exports = {
    getComponents,
    getCustomFields
};
