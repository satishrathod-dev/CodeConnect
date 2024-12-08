// requiring express module
const express = require("express");

// creating and express app name "app"
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

// GET API call
// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.query);
//   console.log(req.params);
//   res.send({
//     name: "Satish",
//     age: 22,
//   });
// });

app.use("/admin", adminAuth);

app.get("/admin/getData", (req, res) => {
  res.send("Data sent successfully!");
});

app.delete("/admin/deleteUser", (req, res) => {
  console.log("Deleting user authentication");
  res.send("User deleted successfully!");
});

app.post("/user/login", (req, res) => {
  console.log("User Logged in successfully!");
  res.send("Logged in!");
});

app.get("/user/data", userAuth, (req, res) => {
  console.log("Sending data with authentication");
  res.send("User data send!");
});

// //  Delete API call
// app.delete("/user", (req, res) => {
//   res.send("User deleted successfully!");
// });

// //  This will match all the HTTP method API calls to /test
// app.use("/test", (req, res) => {
//   res.send("Hey there!!");
// });

// Listening on port 3000
app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
