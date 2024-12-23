const axios = require('axios');
const config = require('../config/config');

async function getAllUsers(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/users`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching users data:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching users data',
            error: error.message
        });
    }
}

async function getCurrentUser(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/user`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching current user data:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching current user data',
            error: error.message
        });
    }
}

module.exports = {
    getAllUsers,
    getCurrentUser
};
