const { sequelize } = require("../config/database");
const { User } = sequelize.models;

class UsersController {
  async index(req, res) {
    User.findAll()
      .then((users) => {
        res.status(200).send(users);
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  }

  async read(req, res) {
    const id = Number(req.params.id);
    User.findByPk(id)
      .then((user) => {
        user
          ? res.status(200).json(user)
          : res.status(404).json({ message: "Usuário não encontrado!" });
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  }

  async create(req, res) {
    const { email, name } = req.body;
    User.create({ email, name })
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((e) => {
        res.status(500).json({ error: e, message: e.message });
      });
  }

  async update(req, res) {
    const id = Number(req.params.id);
    const { email, name } = req.body;

    const userExists = await User.findByPk(id);

    if (userExists) {
      return User.update({ email, name }, { where: { id: id } })
        .then((response) => {
          if (response[0] === 1) {
            return res
              .status(200)
              .json({ message: "Usuário atualizado com sucesso!" });
          }
          return res.status(200).json({ message: "Nenhum dado alterado!" });
        })
        .catch((e) => {
          res.status(500).json({ error: e, message: e.message });
        });
    }
    return res.status(404).json({ message: "Usuário não encontrado!" });
  }

  async delete(req, res) {
    const id = Number(req.params.id);
    User.destroy({ where: { id: id } }).then((response) => {
      if (response === 1) {
        return res
          .status(200)
          .json({ message: "Usuário deletado com sucesso!" });
      }
      return res.status(404).json({ message: "Usuário não encontrado!" });
    });
  }
}

module.exports = new UsersController();
