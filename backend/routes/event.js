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
  app.route("/event").post(async (req, res) => {
    const name = req.body.name;
    const pictureId = req.body.pictureId;
    const culture = req.body.culture;
    const fullAddress = req.body.fullAddress;
    const website = req.body.website;
    const phoneNumber = req.body.phoneNumber;
    const description = req.body.description;
    const dateTime = req.body.dateTime;

    await db.query(
      "INSERT INTO events(name, picture_id, culture, address, website, contact_number, description, date_time) Values (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        pictureId,
        culture,
        fullAddress,
        website,
        phoneNumber,
        description,
        dateTime,
      ]
    );
    return res.json({
      success: true,
    });
  });

  app.route("/event").get(async(req, res) => {
    const dbRes = await db.query("SELECT * FROM events LIMIT 100");
    const arrToSend = dbRes[0];
    return res.json(arrToSend);
  });

  app.route("/event/getOne").post(async (req, res) => {
    const eventId = req.body.eventId;
    const dbRes = await db.query(
      "SELECT * FROM events WHERE event_id=? LIMIT 1",
      [eventId]
    );
    console.log(dbRes);
    return res.json(dbRes[0][0]);
  });

  app.route("/event/getByCulture").post(async (req, res) => {
    const culture = req.body.culture;
    const dbRes = await db.query(
      "SELECT * FROM events WHERE culture=? LIMIT 10",
      [culture]
    );
    return res.json(dbRes[0]);
  });
};

