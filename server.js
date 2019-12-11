const express = require("express");
const PORT = 5000;

const app = express();

app.use(express.static("./build"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

const server = app.listen(PORT, () => {
  console.log("Server started...");
});
