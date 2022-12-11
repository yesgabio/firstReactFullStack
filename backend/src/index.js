const { connectDatabase } = require("./config/database");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const port = 3000;

app.use(cors());
app.use(express.json());

connectDatabase();

app.use(routes);

app.listen(port, () => {
  console.log("API Rodando na porta 3000");
});
