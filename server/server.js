const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.send({ greeting: "Hello World!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
