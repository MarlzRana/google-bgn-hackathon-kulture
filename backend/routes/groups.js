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

// Create a pool of connections to the database
const db = mysql2.createPool(dbConfig);

module.exports = (app) => {
    app.route("/groups").post(async (req, res) => {
        const culture = req.body.culture;
        const memberCount = req.body.memberCount;
        const dateMade = req.body.dateMade;
        const name = req.body.groupName;
        const descritption = req.body.descritption;

        await db.query(
            "INSERT INTO groups(culture, member_count, date_made, name, description) VALUES(?, ?, ?, ?, ?)",
            [
                culture,
                memberCount,
                dateMade,
                name,
                descritption,
            ]
        );
        return res.json({
            success: true,
        });
    });

    app.route("/groups").get(async(req, res) => {
        const dbRes = await db.query("SELECT * FROM groups LIMIT 50");
        const arrToSend = dbRes[0];
        return res.json(arrToSend);
    });

    app.route("/groups/getOne").post(async (req, res) => {
        const groupId = req.body.groupId;
        const dbRes = await db.query(
            "SELECT * FROM groups WHERE group_id=? LIMIT 1",
            [groupId]
        );
        console.log(dbRes[0]);
        return res.json(dbRes[0][0])
    });
}

