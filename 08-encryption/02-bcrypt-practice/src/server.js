const bcrypt = require("bcryptjs");
const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

let user = { email: "", password: "" };

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  user = { email, hashedPassword };

  res.json(user);
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log("user", user);
  console.log(`email, ${email}`);
  console.log(`password, ${password}`);

  if (email === user.email && password === user.password) {
    const hashedPassword = await bcrypt.hash(password, 12);

    res.json({ email, hashedPassword });
  } else {
    next(new Error("Login failed: No User Found"));
  }
});

app.use((error, req, res, next) => {
  console.log(error.message);
  res.json({ message: error.message });
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
