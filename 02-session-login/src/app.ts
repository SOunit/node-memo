import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";
import { checkLogin } from "./middleware/check-login";
import authRoutes from "./routes/auth";
import routes from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// how express-session work
// 1. initialize: check req and see if req has uniqueSessionID cookie
// 2. if uniqueSessionID exist, populate req.session object
// 3. if not exist, initialize req.session
// 4. if session changes, set cookie to res.cookie
//
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY!,
    name: "uniqueSessionID",
    saveUninitialized: false,
  })
);

// login routes
app.use(authRoutes);

// protect auth routes below
app.use(checkLogin);
app.use(routes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
