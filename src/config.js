require('dotenv').config();
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_ROUTE: process.env.REACT_APP_API_ROUTE || '',
    API_TOKEN: process.env.REACT_APP_API_TOKEN || '',
}