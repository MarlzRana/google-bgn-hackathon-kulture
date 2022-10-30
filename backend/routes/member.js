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
    app.route("/member").post(async (req, res) => {
        const accountId = req.body.accountId;
        const groupId = req.body.groupId;

        await db.query(
            "INSERT INTO members(account_id, group_id) Values (?, ?)",
            [
                accountId,
                groupId,
            ]
        );
        return res.json({
            success: true,
        });
    });

    app.route("/member/join").post(async(req, res) => {
        const groupId = req.body.groupId;
        const accountId = req.body.accountId;

        const dbRes = await db.query(
            "INSERT INTO members(account_id, group_id) Values (?, ?)",
            [
                groupId,
                accountId,
            ]
        );
        return res.json({success: true})
    });

    app.route("/member/delete").post(async(req, res) => {
        const groupId = req.body.groupId;
        const accountId = req.body.accountId;
        
        const dbRes = await db.query(
            "DELETE FROM members WHERE group_id=? AND account_id=?",
            [
                groupId,
                accountId,
            ]
        );
        console.log(dbRes);
        return res.json({success: true})
    });

    app.route("/member/partOf").post(async(req, res) => {
        const accountId = req.body.accountId;
        const groupId = req.body.groupId;
        
        const dbRes = await db.query(
            "SELECT * FROM members WHERE account_id=? AND group_id=?",
            [
                accountId,
                groupId,
            ]
        );



        if (dbRes[0].length==0) {
            return res.json({success: true, isPartOf: false})
        }

        console.log(dbRes[0]);

        return res.json({success: true, isPartOf: true})
    }); 

    app.route("/member/partAll").post(async(req, res) => {
        const accountId = req.body.accountId;

        const dbRes = await db.query(
            "SELECT * FROM members WHERE account_id=?",
            [accountId]
        );


        return res.json(dbRes[0]);
    
    });
    
}