require('dotenv').config();


const config = {
    AUTH_KEY: process.env.AUTH_KEY,
    BASE_URL: process.env.BASE_URL
};

module.exports = config;
