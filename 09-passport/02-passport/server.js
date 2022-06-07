const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
const PORT = process.env.PORT || 3000;

// keep user data in local
// you can replace this to db
const users = [];

app.set("view-engine", "ejs");

// to access using req object
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Jack" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (error) {
    res.redirect("/register");
  }
  console.log(users);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
