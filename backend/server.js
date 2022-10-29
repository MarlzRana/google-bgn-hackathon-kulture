const PORT = process.env.PORT || 3000;

const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
