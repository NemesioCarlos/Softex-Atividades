const express = require("express");
const sequelize = require("./models/db");
const app = express();

app.get("/", async (req, res) => {
  res.send("pagina inicial - Nemesio");
});

app.listen(8080, () => {
  console.log("Sevidor iniciado na porta 8080 http://localhost:8080 ");
});

module.exports = sequelize