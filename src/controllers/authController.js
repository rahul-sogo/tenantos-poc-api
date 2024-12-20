const axios = require('axios');
const config = require('../config/config');

async function getSettingsAfterLogin(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/system/settingsAfterLogin`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching settings:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching settings',
            error: error.message
        });
    }
}

module.exports = {
    getSettingsAfterLogin
};
