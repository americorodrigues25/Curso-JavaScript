const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/app.db",
});

module.exports = sequelize;
// Aqui estamos configurando a conexão com o banco de dados SQLite usando Sequelize

// sequelize é uma aplicação para utilizar bancos relacionais com node.js
