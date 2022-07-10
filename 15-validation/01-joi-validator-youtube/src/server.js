const express = require("express");
const { validateSignup } = require("./validator");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/signup", (req, res) => {
  const { error, value } = validateSignup(req.body);

  if (error) {
    console.log(error);
    return res.json(error.details);
  }

  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
