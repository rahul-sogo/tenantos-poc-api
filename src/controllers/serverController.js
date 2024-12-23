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

async function getServerById(req, res) {
    try {
        const { id } = req.params;
        const response = await axios.get(`${config.BASE_URL}/api/servers/${id}`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching server:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching server',
            error: error.message
        });
    }
}

async function updateServer(req, res) {
    try {
        const { id } = req.params;
        const response = await axios.put(`${config.BASE_URL}/api/servers/${id}`, req.body, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error updating server:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error updating server',
            error: error.message
        });
    }
}

async function deleteServer(req, res) {
    try {
        const { id } = req.params;
        const response = await axios.delete(`${config.BASE_URL}/api/servers/${id}`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error deleting server:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error deleting server',
            error: error.message
        });
    }
}

async function getIpAssignments(req, res) {
    const { server_id } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server_id}/ipassignments`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching IP assignments:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching IP assignments',
            error: error.message
        });
    }
}

async function getAssignableSubnets(req, res) {
    const { server_id } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server_id}/ipassignments/getAssignableSubnets`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching IP assignments:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching IP assignments',
            error: error.message
        });
    }
}

async function getInventory(req, res) {
    const { server_id } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server_id}/inventory`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching inventory:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching inventory',
            error: error.message
        });
    }
}

async function getComments(req, res) {
    const { server_id } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server_id}/comments`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching comments',
            error: error.message
        });
    }
}

async function getActivityLog(req, res) {
    const { server_id } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server_id}/activitylog`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching activity log:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching activity log',
            error: error.message
        });
    }
}

async function getTags(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/tags`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching tags:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching tags',
            error: error.message
        });
    }
}

async function getConnections(req, res) {
    const { server_id } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server_id}/connections`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching connections:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching connections',
            error: error.message
        });
    }
}

async function getHwSummary(req, res) {
    const { server_id } = req.params;
    try {
        const response = await axios.get(`${config.BASE_URL}/api/servers/${server_id}/hwsummary`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error fetching hardware summary',
            error: error.message
        });
    }
}

async function createServer(req, res) {
    try {
        const response = await axios.post(`${config.BASE_URL}/api/servers`, req.body, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: 'Error creating server',
            error: error.message
        });
    }
}

module.exports = {
    getServers,
    getServerById,
    updateServer,
    deleteServer,
    getIpAssignments,
    getInventory,
    getComments,
    getActivityLog,
    getTags,
    getConnections,
    getHwSummary,
    createServer,
    getAssignableSubnets
};
