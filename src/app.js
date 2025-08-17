const express = require("express");
const { adminAuth } = require("./middlewars/auth.js");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

const app = express();

app.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstName: "Prince",
      lastName: "Shukla",
      email: "prince@gmail.com",
      phoneNumber: 1234567890,
      password: "Test@123",
      age: 24,
      gender: "male",
    });

    const savedUser = await user.save();

    res
      .status(200)
      .json({ message: "User signed up successfully", data: savedUser });
  } catch (error) {
    console.error("Failed to create new user");
    res.status(500).send("Failed to create user");
  }
});

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("server is running on 5000");
    });
  })
  .catch((error) => {
    console.log("db connection failed  !!! ", error);
  });
