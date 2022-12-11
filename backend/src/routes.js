const express = require("express");
const routes = express.Router();

const UsersController = require("./controllers/UsersController");

routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.read);
routes.delete("/users/:id", UsersController.delete);
routes.put("/users/:id", UsersController.update);
routes.post("/users", UsersController.create);

const ProductsController = require("./controllers/ProductsController");

routes.get("/products", ProductsController.index);
routes.get("/products/:id", ProductsController.read);
routes.delete("/products/:id", ProductsController.delete);
routes.put("/products/:id", ProductsController.update);
routes.post("/products", ProductsController.create);

const ContactsController = require("./controllers/ContactsController");

routes.get("/contacts", ContactsController.index);
routes.get("/contacts/:id", ContactsController.read);
routes.delete("/contacts/:id", ContactsController.delete);
routes.put("/contacts/:id", ContactsController.update);
routes.post("/contacts", ContactsController.create);

// Rota não encontrada
routes.use("*", (req, res) =>
  res.status(404).json({ message: "Rota não encontrada!" })
);

module.exports = routes;
