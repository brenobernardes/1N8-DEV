const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const serverHost = process.env.host;
const serverPort = process.env.port;
const serverUser = process.env.user;
const serverPassword = process.env.password;

const db = mysql.createConnection({
    host: serverHost,
    port: serverPort,
    user: serverUser,
    password: serverPassword
});

db.connect((err) => {
    if(err) {
        console.log("Database conection failed");
    } else {
        console.log("Connected to database");

        const dbName = "user"

        db.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, function (err) {
            if (err) throw err;
        })

        db.query(`USE ${dbName}`, (err) => {
            if(err) throw err;
        })

        const dbTable = "users";

        db.query(`CREATE TABLE IF NOT EXISTS ${dbTable} (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(255), 
            email VARCHAR(255), 
            birthDate DATE,
            phone VARCHAR(255)
            )`, function (err) {
                if (err) throw err;
        })
    }
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const birthDate = req.body.birthDate;
    const phone = req.body.phone;

    let saveDb = "INSERT INTO users (name, email, birthDate, phone) VALUES ( ?, ?, ?, ? )";
    db.query(saveDb, [name, email, birthDate, phone], (err, result) => {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get("/return", (req, res) => {
    let dbReturnData = "SELECT * FROM users";
    db.query(dbReturnData, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("server rodando")
});