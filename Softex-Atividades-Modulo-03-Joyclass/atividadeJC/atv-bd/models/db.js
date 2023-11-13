const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("carlos", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

module.exports.sequelize

sequelize.authenticate()

  .then(function () {
    console.log("Conxao feita com sucesso!");
  })
  .catch(function () {
    console.log("ERRO: conexão não realizada!");
  });

module.exports = sequelize;
