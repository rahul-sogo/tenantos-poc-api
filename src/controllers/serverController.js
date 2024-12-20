const axios = require('axios');
const config = require('../config/config');

async function getServers(req, res) {
    try {
        const apiUrl = `${config.BASE_URL}/api/servers`;

        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching servers:', error);
        res.status(error.response?.status || 500).json({ 
            message: 'Error fetching servers',
            error: error.message 
        });
    }
}

module.exports = {
    getServers
};
