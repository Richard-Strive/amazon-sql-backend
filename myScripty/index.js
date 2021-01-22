require("dotenv").config();
const fs = require("fs");
const path = require("path");
const db = require("../src/secretWeapons/db/index");
const { promisify } = require("util");
const read = promisify(fs.readFile);
const createTable = async () => {
  try {
    const dataPath = path.join(__dirname, "../sqlSchemas/schemas.sql");
    const data = await read(dataPath);
    const sqlQueryString = data.toString();
    await db.query(sqlQueryString);
    console.log("THE TABLES ARE CREATED!!! WELL DONE RICHARD");
  } catch (error) {
    console.log(
      "OPS SOMETHING WENT WRONG. UNFORTUNATLY NOTHIG HAS BEEN CREATED!!!"
    );
    console.log(error);
  }
  db.pool.end();
};

createTable();
