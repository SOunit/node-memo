const userSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    // format comes from ajv-format library
    email: { type: "string", format: "email" },
    dob: { type: "string", format: "date" },
    countryCode: {
      type: "string",
      enum: ["US", "CA"],
    },
  },
  required: ["firstName", "email", "dob", "countryCode"],
  additionalProperties: false,
};

module.exports = userSchema;
