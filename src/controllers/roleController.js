const axios = require('axios');
const config = require('../config/config');

async function getRoles(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/roles`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching roles',
            error: error.message
        });
    }
}

async function deleteRole(req, res) {
    const { id } = req.params;
    try {
        const response = await axios.delete(`${config.BASE_URL}/api/roles/${id}`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error deleting role',
            error: error.message
        });
    }
}

module.exports = {
    getRoles,
    deleteRole
};
