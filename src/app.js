const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Satish",
    lastName: "Rathod",
    emailId: "satish@rathod.com",
    password: "satish@123",
    age: 23,
    gender: "male",
  });

  try {
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    res.status(400).send("Bad request", err);
    console.log(err);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => console.log("Server started on port 3000"));
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });
