const axios = require('axios');
const config = require('../config/config');

async function getProfiles(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/pxe/profiles`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching PXE profiles',
            error: error.message
        });
    }
}

async function getDiskLayouts(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/pxe/disklayouts`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching disk layouts',
            error: error.message
        });
    }
}

async function getScripts(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/pxe/scripts`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching PXE scripts',
            error: error.message
        });
    }
}

module.exports = {
    getProfiles,
    getDiskLayouts,
    getScripts
};
