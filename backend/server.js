require("dotenv").config();
const PORT = process.env.PORT || 3000;

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3003",
      "http://localhost:3004",
      "http://localhost:3005",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
