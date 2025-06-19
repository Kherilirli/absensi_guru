const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

console.log("ENV CHECK:", {
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE
  });

const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;

const db = mysql.createConnection({
    host : DB_HOST,
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_DATABASE
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    } else {
        console.log('Connected to the database');
        return;
    }
});

db.query = util.promisify(db.query);

module.exports = db;