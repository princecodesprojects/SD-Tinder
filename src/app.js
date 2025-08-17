const express = require("express");
const { adminAuth } = require("./middlewars/auth.js");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);

    const savedUser = await user.save();

    res
      .status(200)
      .json({ message: "User signed up successfully", data: savedUser });
  } catch (error) {
    console.error("Failed to create new user");
    res.status(500).send("Failed to create user");
  }
});

app.get("/user", async (req, res) => {
  try {
    const email = req.body.email;

    const users = await User.findOne({ email });

    if (!users) {
      res.status(404).send("No user found");
    } else {
      res.status(200).json({ message: "user get successfully", data: users });
    }
  } catch (error) {
    console.error("Failed to create new user");
    res.status(500).send("Failed to create user");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({ message: "user get successfully", data: users });
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
