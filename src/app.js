import express from "express";
import { adminAuth } from "./middlewars/auth.js";

const app = express();

// app.use("/admin", adminAuth);

// app.get("/admin/getAllData", (req, res) => {
//   console.log("user route for get all data");
//   res.status(200).send("response with all data");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   console.log("user route for delete");
//   res.status(200).send("user deleted");
// });

//Error handling

app.get("/getUserData", (req, res) => {
  throw new Error("errors");

  res.send("User data sent");
});

app.listen(5000, () => {
  console.log("server is running on 5000");
});
