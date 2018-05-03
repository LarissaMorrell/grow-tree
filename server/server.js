const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/helloworld", (req, res) => {
  res.send({ greeting: "Hello World!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
