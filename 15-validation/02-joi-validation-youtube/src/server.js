const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/signup", (req, res) => {
  const postData = req.body;
  res.json(postData);
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
