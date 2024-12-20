const axios = require('axios');
const config = require('../config/config');

async function startConsole(req, res) {
    const { server } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server}/console/start`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error starting console session',
            error: error.message
        });
    }
}

module.exports = {
    startConsole
};
