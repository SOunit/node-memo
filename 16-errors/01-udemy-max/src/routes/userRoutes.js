const express = require("express");

const userRoutes = express.Router();

userRoutes.get("/", (req, res, next) => {
  const error = new Error("Error in get users");
  error.statusCode = 500;
  return next(error);
});

userRoutes.post("/", (req, res, next) => {
  const error = new Error("Error in post users");
  error.statusCode = 500;
  return next(error);
});

userRoutes.patch("/:userId", (req, res, next) => {
  const error = new Error("Error in patch users");
  error.statusCode = 500;
  return next(error);
});

userRoutes.delete("/:userId", (req, res, next) => {
  const error = new Error("Error in delete users");
  error.statusCode = 500;
  return next(error);
});

module.exports = userRoutes;
