const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use("/users", userRoutes);

app.use((error, req, res, next) => {
  console.log("error handling");
  console.log(error);
  res.status(error.statusCode).json({ errorMessage: error.message });
});

app.use((req, res, next) => {
  console.log("dummy");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
