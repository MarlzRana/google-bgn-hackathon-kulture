const mysql2 = require("mysql2/promise");
const fs = require("fs");

//Environmental variables
const DBHOSTSERVERADDRESS = process.env.DBHOSTSERVERADDRESS;
const DBSERVERUSERNAME = process.env.DBSERVERUSERNAME;
const DBSERVERPASSWORD = process.env.DBSERVERPASSWORD;
const DBSERVERDATABASENAME = process.env.DBSERVERDATABASENAME;
const DBSERVERPORT = process.env.DBSERVERPORT;
const DBCERTIFICATEFILEPATH = process.env.DBCERTIFICATEFILEPATH;

//The dbConfig object is used to connect to the database
const dbConfig = {
  host: DBHOSTSERVERADDRESS,
  user: DBSERVERUSERNAME,
  password: DBSERVERPASSWORD,
  database: DBSERVERDATABASENAME,
  port: DBSERVERPORT,
  ssl: { ca: fs.readFileSync(DBCERTIFICATEFILEPATH) },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true,
};

//Create a pool of connections to the database
const db = mysql2.createPool(dbConfig);

module.exports = (app) => {
  app.route("/auth/register").post(async (req, res) => {
    const username = req.body.username;
    await db.query("INSERT INTO accounts(username) VALUES(?)", username);
    return res.json({
      success: true,
    });
  });

  app.route("/auth/login").post(async (req, res) => {
    const username = req.body.username;
    console.log(username);
    const queryResult = await db.query(
      "SELECT account_id FROM accounts WHERE username=?",
      username
    );
    const accountId = queryResult[0][0].account_id;
    return res.json({
      success: true,
      accountId: accountId,
    });
  });
};
