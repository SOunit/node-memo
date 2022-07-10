const Ajv = require("ajv");
const addFormats = require("ajv-formats");

// allErrors: true to validate all data
const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);

module.exports = ajvInstance;
