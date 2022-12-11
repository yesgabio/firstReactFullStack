const { sequelize } = require("../config/database");
const { Contact } = sequelize.models;

class ContactsController {
  async index(req, res) {
    Contact.findAll()
      .then((contacts) => {
        res.status(200).send(contacts);
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  }

  async read(req, res) {
    const id = Number(req.params.id);
    Contact.findByPk(id)
      .then((contact) => {
        contact
          ? res.status(200).json(contact)
          : res.status(404).json({ message: "Contato não encontrado!" });
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  }

  async create(req, res) {
    const { name, email, fone, message } = req.body;
    Contact.create({ name, email, fone, message })
      .then((contact) => {
        res.status(201).send(contact);
      })
      .catch((e) => {
        res.status(500).json({ error: e, message: e.message });
      });
  }

  async update(req, res) {
    const id = Number(req.params.id);
    const { name, email, fone, message } = req.body;

    const contactExists = await Contact.findByPk(id);

    if (contactExists) {
      return Contact.update({ name, email, fone, message }, { where: { id: id } })
        .then((response) => {
          if (response[0] === 1) {
            return res
              .status(200)
              .json({ message: "Contato atualizado com sucesso!" });
          }
          return res.status(200).json({ message: "Nenhum dado alterado!" });
        })
        .catch((e) => {
          res.status(500).json({ error: e, message: e.message });
        });
    }
    return res.status(404).json({ message: "Contato não encontrado!" });
  }

  async delete(req, res) {
    const id = Number(req.params.id);
    User.destroy({ where: { id: id } }).then((response) => {
      if (response === 1) {
        return res
          .status(200)
          .json({ message: "Contato deletado com sucesso!" });
      }
      return res.status(404).json({ message: "Contato não encontrado!" });
    });
  }
}

module.exports = new ContactsController();