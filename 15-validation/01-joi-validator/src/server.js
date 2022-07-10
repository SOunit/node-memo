const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required(),
});

app.post("/signup", (req, res) => {
  const { error, value } = signupSchema.validate(req.body);
  if (error) {
    console.log(error);
    return res.json({ message: "Invalid Request" });
  }

  res.json({ test: "test" });
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
