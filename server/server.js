const express = require("express");

const app = express();

app.get("/login", (req, res) => {
  const data = req.body;
  console.log("body data: ", data);
  // logic
  return res.send({
    success: true,
    message: "logged in successfully",
  });
});

app.get("/logout", (req, res) => {
  const data = req.body;
  console.log("body data: ", data);
  // logic
  return res.send({
    success: true,
    message: "logged out successfully",
  });
});

app.get("/register", (req, res) => {
  const data = req.body;
  console.log("body data: ", data);
  // logic
  return res.send({
    success: true,
    message: "user registered successfully",
  });
});

app.listen(8585, () => {
  console.log("listening on port 8585");
});
