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
  app.route("/food/place").post(async (req, res) => {
    const pictureId = req.body.pictureId;
    const name = req.body.name;
    const culture = req.body.culture;
    const type = req.body.type;
    const description = req.body.description;
    const openingHours = req.body.openingHours;
    const phoneNumber = req.body.phoneNumber;
    const website = req.body.website;
    const menuLink = req.body.menuLink;
    const fullAddress = req.body.fullAddress;

    await db.query(
      "INSERT INTO food_places(picture_id, name, culture, type, description, opening_hours, phone_number, website, menu_link, full_address) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        pictureId,
        name,
        culture,
        type,
        description,
        openingHours,
        phoneNumber,
        website,
        menuLink,
        fullAddress,
      ]
    );
    return res.json({
      success: true,
    });
  });

  app.route("/food/places").get(async (req, res) => {
    const dbRes = await db.query("SELECT * FROM food_places LIMIT 100;");
    const arrToSend = dbRes[0];
    return res.json(arrToSend);
  });

  app.route("/food/place/getOne").post(async (req, res) => {
    const foodPlaceId = req.body.foodPlaceId;
    const dbRes = await db.query(
      "SELECT * FROM food_places WHERE food_place_id=? LIMIT 1",
      foodPlaceId
    );
    return res.json(dbRes[0][0]);
  });

  app.route("/food/place/getByCulture").post(async (req, res) => {
    const culture = req.body.culture;
    const dbRes = await db.query(
      "SELECT * FROM food_places WHERE culture=? LIMIT 10",
      [culture]
    );
    return res.json(dbRes[0]);
  });

  app.route("/food/like").post(async(req, res) => {
    const accountId = req.body.accountId;
    const foodPlaceId = req.body.foodPlaceId

    const dbRes = await db.query(
      "INSERT INTO liked_foods(account_id, food_place_id) Values (?,?)",
      [
        accountId,
        foodPlaceId,
      ]
    );

    console.log(dbRes[0][0]);

    return res.json({success: true})

  })

  app.route("/food/searchByName").post(async(req, res) => {
    const name = req.body.name;
    
    const dbRes = await db.query(
      "SELECT * FROM food_places WHERE name LIKE '%?%'",
      [name],
    );

    console.log(dbRes[0]);

    return res.json({success:true}, dbRes[0])
  })

  app.route("/food/searchByCulture").post(async(req, res) => {
    const culture = req.body.culture;

    const dbRes = await db.query(
      "SELECT * FROM food_places WHERE culture LIKE '%?%'"
      [culture],
    );

    console.log(dbRes[0]);
    
    return res.json({success: true}, dbRes[0])
  });

};
