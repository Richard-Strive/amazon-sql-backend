require("dotenv").config();
const fs = require("fs");
const path = require("path");
const db = require("../src/secretWeapons/db/index");

const { promisify } = require("util");
const read = promisify(fs.readFile);
const createTable = async () => {
  try {
    const dataPath = path.join(__dirname, "../src/mySchema/theSchema.sql");
    const data = await read(dataPath);
    const sqlQueryString = data.toString();
    await db.query(sqlQueryString);
    console.log("BRO YOU HACKED. GOOD JOB!!! A TABLE IS CREATED NOW.");
  } catch (error) {
    console.log("PAY ATTENTION. NOTHING IS CREATED!!!");
    console.log(error);
  }
  db.pool.end();
};

createTable();
