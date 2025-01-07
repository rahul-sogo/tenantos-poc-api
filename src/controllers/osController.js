    const axios = require('axios');
    const config = require('../config/config');

    async function startReinstallation(req, res,) {
        const { server } = req.params;
        try {
            const response = await axios.post(
                `${config.BASE_URL}/api/servers/${server}/provisioning/startReinstallation`, 
                {}, 
                {
                    headers: {
                        'Authorization': `Bearer ${config.AUTH_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            res.status(200).json({
                success: true,
                data: response.data
            });
        } catch (error) {
            res.status(error.response?.status || 500).json({
                success: false,
                message: 'Error starting reinstallation',
                error: error.response?.data || error.message
            });
        }
    }

    async function stopReinstallation(req, res) {
        const { server } = req.params;
        try {
            const response = await axios.get(
                `${config.BASE_URL}/api/servers/${server}/provisioning/stopReinstallation`,
                {
                    headers: {
                        'Authorization': `Bearer ${config.AUTH_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            res.status(200).json({
                success: true,
                data: response.data
            });
        } catch (error) {
            res.status(error.response?.status || 500).json({
                success: false,
                message: 'Error stopping reinstallation',
                error: error.response?.data || error.message
            });
        }
    }

    async function getInstallStatus(req, res) {
        const { server } = req.params;
        try {
            const response = await axios.get(
                `${config.BASE_URL}/api/servers/${server}/provisioning/getInstallStatus`,
                {
                    headers: {
                        'Authorization': `Bearer ${config.AUTH_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            res.status(200).json({
                success: true,
                data: response.data
            });
        } catch (error) {
            res.status(error.response?.status || 500).json({
                success: false,
                message: 'Error fetching install status',
                error: error.response?.data || error.message
            });
        }
    }

    async function getServerProfiles(req, res) {
        const { server } = req.params;
        try {
            const response = await axios.get(
                `${config.BASE_URL}/api/servers/${server}/provisioning/getProfiles`,
                {
                    headers: {
                        'Authorization': `Bearer ${config.AUTH_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            res.status(200).json({
                success: true,
                message: 'Profiles fetched successfully',
                data: response.data
            });
        } catch (error) {
            res.status(error.response?.status || 500).json({
                success: false,
                message: 'Error fetching profiles',
                error: error.response?.data || error.message
            });
        }
    }

    module.exports = {
        startReinstallation,
        stopReinstallation,
        getInstallStatus,
        getServerProfiles
    };
