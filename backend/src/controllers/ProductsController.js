const { sequelize } = require("../config/database");
const { Product } = sequelize.models;

class ProductsController {
  async index(req, res) {
    Product.findAll()
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  }

  async read(req, res) {
    const id = Number(req.params.id);
    Product.findByPk(id)
      .then((product) => {
        product
          ? res.status(200).json(product)
          : res.status(404).json({ message: "Produto não encontrado!" });
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  }

  async create(req, res) {
    const { name, description, price } = req.body;
    Product.create({ name, description, price })
      .then((product) => {
        res.status(201).send(product);
      })
      .catch((e) => {
        res.status(500).json({ error: e, message: e.message });
      });
  }

  async update(req, res) {
    const id = Number(req.params.id);
    const { name, description, price } = req.body;

    const productExists = await Product.findByPk(id);

    if (productExists) {
      return Product.update({ name, description, price }, { where: { id: id } })
        .then((response) => {
          if (response[0] === 1) {
            return res
              .status(200)
              .json({ message: "Produto atualizado com sucesso!" });
          }
          return res.status(200).json({ message: "Nenhum dado alterado!" });
        })
        .catch((e) => {
          res.status(500).json({ error: e, message: e.message });
        });
    }
    return res.status(404).json({ message: "Produto não encontrado!" });
  }

  async delete(req, res) {
    const id = Number(req.params.id);
    Product.destroy({ where: { id: id } }).then((response) => {
      if (response === 1) {
        return res
          .status(200)
          .json({ message: "Produto deletado com sucesso!" });
      }
      return res.status(404).json({ message: "Produto não encontrado!" });
    });
  }
}

module.exports = new ProductsController();