const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/signup", (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
