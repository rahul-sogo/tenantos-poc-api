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

async function getUiSettings(req, res) {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/system/ui/settings`, {
            headers: {
                'Authorization': `Bearer ${config.AUTH_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching UI settings:', error);
        res.status(error.response?.status || 500).json({
            message: 'Error fetching UI settings',
            error: error.message
        });
    }
}

async function getUiLanguage(req, res) {
  try {
      const response = await axios.get(`${config.BASE_URL}/api/system/ui/uiLanguage`, {
          headers: {
              'Authorization': `Bearer ${config.AUTH_KEY}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      });
      res.json(response.data);
  } catch (error) {
      console.error('Error fetching UI language:', error);
      res.status(error.response?.status || 500).json({
          message: 'Error fetching UI language',
          error: error.message
      });
  }
}

async function getVersion(req, res) {
  try {
      const response = await axios.get(`${config.BASE_URL}/api/system/ui/version`, {
          headers: {
              'Authorization': `Bearer ${config.AUTH_KEY}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      });
      res.json(response.data);
  } catch (error) {
      console.error('Error fetching version:', error);
      res.status(error.response?.status || 500).json({
          message: 'Error fetching version',
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
        res.status(error.response?.status || 500).json({
            message: 'Error fetching activity log',
            error: error.message
        });
    }
}

module.exports = {
    getActivityLog
};


module.exports = {
    getSettingsAfterLogin,
    getUiSettings,
    getUiLanguage,
    getVersion,
    getActivityLog
};
