const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 20,
    },
    lastName: {
      type: String,
      required: true,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxLength: 50,
      //   validate(value) {
      //     if (!validator.isEmail(value)) {
      //       throw new Error("Email is not valid");
      //     }
      //   },
    },
    phoneNumber: {
      type: Number,
      unique: true,
      minLength: 10,
      maxLength: 13,
    },
    password: {
      type: String,
      required: true,
      maxLength: 100,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      maxLength: 20,
      //   validate(value) {
      //     if (!["male", "female"].includes(value)) {
      //       throw new Error("Gender is not valid");
      //     }
      //   },
    },
    photoUrl: {
      type: String,
    },
    about: {
      type: String,
      maxLength: 20,
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
