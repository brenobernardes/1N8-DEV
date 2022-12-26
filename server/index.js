const express = require("express");
const app = express();
const sql = require("mssql");
const cors = require("cors");

app.listen(3001, () => {
    console.log("server rodando")
});