const PORT = process.env.PORT || 3000;

const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

require("./routes/auth.js")(app);
require("./routes/food.js")(app);
require("./routes/event.js")(app);
require("./routes/groups.js")(app);
require("./routes/member.js")(app);

app.route("/").get((req, res) => {
  res.json({
    serverName: "culture-api",
    connected: true,
  });
});

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
