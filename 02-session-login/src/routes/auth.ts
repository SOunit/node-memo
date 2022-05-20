import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  console.log("login");

  res.render("login");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  // Actual implementation would check values in a database
  if (email === "t@t.com" && password === "password") {
    (req.session as any).loggedIn = true;
  }

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {});
  res.redirect("/");
});

export default router;
