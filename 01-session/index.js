const express = require("express");
const session = require("express-session");

const app = express();

const PORT = 8000;

let viewCount = 0;

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  viewCount++;
  if (req.session.viewCount) {
    req.session.viewCount += 1;
  } else {
    req.session.viewCount = 1;
  }

  res.json({ viewCount: req.session.viewCount });
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
