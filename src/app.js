const express = require("express");
const { adminAuth } = require("./middlewars/auth.js");
const connectDB = require("./config/database.js");

const app = express();

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("server is running on 5000");
    });
  })
  .catch((error) => {
    console.log("db connection failed  !!! ", error);
  });
