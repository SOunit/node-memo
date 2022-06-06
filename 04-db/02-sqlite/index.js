const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// path
const db = new sqlite3.Database(
  path.join(__dirname, "mock.db"),
  sqlite3.OPEN_READWRITE,

  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("connection success");
  }
);
