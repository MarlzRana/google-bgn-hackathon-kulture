const PORT = process.env.PORT || 3000;

const express = require("express");

const app = express();

app.route("/").get((req, res) => {
  res.json({
    serverName: "culture-api",
    connected: true,
  });
});

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
