const ajvInstance = require("../schema/ajv-instance");

function validateData(ajvSchema) {
  return (req, res, next) => {
    const valid = ajvInstance.validate(ajvSchema, req.body);
    if (!valid) {
      const errors = ajvInstance.errors;
      console.log("errors", errors);
      return res.status(400).json(errors);
    }

    next();
  };
}

module.exports = validateData;
