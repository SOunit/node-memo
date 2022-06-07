const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");

router.get("/", (req, res) => {
  res.status(200).json({ msg: "/ Route checker" });
});

router.get("/login", (req, res) => {
  let sess = req.session;

  if (sess.email) {
    return res.redirect("/api/admin");
  }
  res.render("login");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.find(email)
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.email = email;
          res.end("logged in");
        } else {
          res.end("Invalid credentials");
        }
      } else {
        res.end("No user found");
      }
    })
    .catch((err) => {
      res.end(err.message);
    });
});

router.get("/register", (req, res) => {
  let sess = req.session;
  if (sess.email) {
    return res.redirect("/api/admin");
  }
  res.render("register");
});

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  const passwordHash = bcrypt.hashSync(password, 10);

  const user = new User(email, passwordHash);
  user
    .save()
    .then((result) => {
      console.log(result);
      res.end("Registered");
    })
    .catch((err) => {
      res.end(err.message);
    });
});

router.get("/admin", (req, res) => {
  const { email } = req.session;
  if (email) {
    res.write(`<h1>Hello ${email}</h1>`);
    res.end();
  } else {
    res.end("Login first");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.error(err);
    }
    res.redirect("/api/login");
  });
});

module.exports = router;
