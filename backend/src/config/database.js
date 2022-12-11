const { Sequelize } = require("sequelize");

const options = {
  database: "node_api",
  dialect: "mysql",
  host: "localhost",
  password: "",
  port: 3306,
  username: "root",
};

// Conexão com o banco de dados
const sequelize = new Sequelize(options);

// Importando os modelos, que são os espelhos das tabelas do banco de dados
const models = [require("../models/user.model"), require("../models/product.model"), require("../models/contact.model")];

// Inicializando os modelos
models.forEach((model) => model(sequelize));

// Sincronizando os modelos com o banco de dados (Cria as tabelas)
const connectDatabase = async () => {
  sequelize
    .sync()
    .then(() => {
      console.log("Conectado ao banco de dados com sucesso!");
    })
    .catch((e) => {
      console.log("Erro ao conectar ao banco de dados: " + e.message);
    });
};

module.exports = { connectDatabase, sequelize };
