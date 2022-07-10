const express = require("express");
const validateData = require("./middleware/validate-dto");
const userSchema = require("./schema/user");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/register", validateData(userSchema), (req, res) => {
  const postData = req.body;
  res.json(postData);
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
