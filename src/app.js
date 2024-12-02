// requiring express module
const express = require("express");

// creating and express app name "app"
const app = express();
app.use("/test", (req, res) => {
  res.send("Hey there!!");
});

app.use((req, res) => {
  res.send("Hello World");
});

// Listening on port 3000
app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
