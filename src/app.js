// requiring express module
const express = require("express");

// creating and express app name "app"
const app = express();

// GET API call
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send({
    name: "Satish",
    age: 22,
  });
});

// // POST API call
// app.post("/user", (req, res) => {
//   console.log("Data saved in the Database");
//   res.send("Data saved in the Database");
// });

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
