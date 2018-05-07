const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

//Enable CORS on the server for development since
//since we need to use proxy with create-react-app
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
