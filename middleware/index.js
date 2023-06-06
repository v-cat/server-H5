const express = require("express");
const app = express();
function loginMiddleWare(req, res, next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  next();
}

app.use(loginMiddleWare);
app.get("/home", (req, res) => {
  res.send("Hello World");
});
