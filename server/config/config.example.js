// Overwrite the properties on config as needed
// Will be loaded if NODE_ENV=example
var config = require('./config.defaults.js');
config.env = 'example';

// Export the configuration settings
module.exports = config;
