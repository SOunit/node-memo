require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const posts = [
  { userName: "Jack", title: "post1" },
  { userName: "Bec", title: "post2" },
];

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.userName === req.user.name));
});

app.post("/login", (req, res) => {
  // this here is auth code, but auth is another topic,
  // this here just focus only on jwt

  // 1. Build Node.js User Authentication - Password Login
  // https://www.youtube.com/watch?v=Ud5xKCYQTjM&t=0s

  // 2. What Is JWT and Why Should You Use JWT
  // https://www.youtube.com/watch?v=7Q17ubqLfaM

  // Authenticate user
  // 1. access db with email / password
  // 2. get user if success
  // 3. get error if user not exist

  const userName = req.body.userName;
  const user = { name: userName };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

function authenticateToken(req, res, next) {
  // Bearer TOKEN
  const authHeader = req.headers["authorization"];

  // token = undefined or token
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    // no token
    return res.sendStatus(401);
  }

  // verify token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      // you have token, but it is invalid
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
