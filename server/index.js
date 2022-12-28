const express = require("express");
const app = express();
const mysql = require("mysql2");
// const cors = require("cors");
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

console.log(serverHost, serverPort, serverUser, serverPassword)

db.connect((err) => {
    if(err) {
        console.log("Database conection failed");
    } else {
        console.log("Connected to database");

        db.query("CREATE DATABASE IF NOT EXISTS user", function (err) {
            if (err) throw err;
            console.log("Database created")
        })

        db.query(`CREATE TABLE IF NOT EXISTS users (
            id INT, 
            name VARCHAR(255), 
            email VARCHAR(255), 
            birthDate DATE,
            phone VARCHAR(255)
            )`, function (err) {
                if (err) throw err;
                console.log("Table created")
        })
    }
});

app.use(express.json());

app.post("/register", (req, res) => {
    const name = req.body;
    const email = req.body;
    const birthDate = req.body;
    const phone = req.body;

    mysql = "INSERT INTO user ( name, email, birthDate, phone) VALUES ( ?, ?, ?, ? )";
    db.query(mysql, [name, email, birthDate, phone], (err, result) => {
        if (err) res.send(err);
        res.send(result);
    });
});

app.listen(3001, () => {
    console.log("server rodando")
});