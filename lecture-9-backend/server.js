const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "My first API works!",
    course : "Browser-programming",
    year: 2026,
    time: new Date()
  });
});

app.get("/api/student", (req, res) => {
  res.json({
    name: "Tiago",
    role: "Student"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

