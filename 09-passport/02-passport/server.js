if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const initializePassport = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");

initializePassport(
  passport,
  (email) => {
    return users.find((user) => user.email === email);
  },
  (id) => {
    return users.find((user) => user.id === id);
  }
);

const app = express();
const PORT = process.env.PORT || 3000;

// keep user data in local
// you can replace this to db
const users = [];

app.set("view-engine", "ejs");

// to access using req object
app.use(express.urlencoded({ extended: false }));
app.use(flash());
// resave: if nothing change, no save for session
// saveUninitialized: no save if value is empty
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// protect route with middleware
app.get("/", checkAuthenticated, (req, res) => {
  res.render("index.ejs", { name: req.user.name });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// use passport middleware for login logic
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "login",
    failureFlash: true,
  })
);

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

function checkAuthenticated(req, res, next) {
  // `req.isAuthenticated` is from passport
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
