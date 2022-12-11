import api from "../services/api";
import { useEffect, useState } from "react";

function Cadastro() {
  const [products, setProducts] = useState([]);
  const [dataEdit, setDataEdit] = useState(false);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        alert("Erro ao buscar produtos");
      });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const newProduct = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
    };
    api.post("/products", newProduct).then((response) => {
      console.log(response);
      setProducts([...products, response.data]);
      alert("Produto cadastrado com sucesso!");
    });
  };

  const handleRemove = (id) => {
    console.log(id);
    api.delete(`/products/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      alert("Produto deletado com sucesso!");
    });
  };

  const handleFormEdit = (event, id) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const editProduct = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
    };
    api.put(`/products/${id}`, editProduct).then((response) => {
      console.log(response);
      setProducts([...products, response.data]);
      alert("Produto alterado com sucesso!");
    });
  }

  return (
    <>
      <h1>GERENCIAMENTO DE PRODUTOS</h1>
      <br />
      <p className="gerenciamento">
        Nesta sessão você consegue cadastrar seus produtos, deletar ou alterar
        produtos já cadastrados.
      </p>
      <br />
      <h2>CADASTRO DE NOVOS PRODUTOS</h2>
      <div className="form">
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <p>
            Nome do Produto:{" "}
            <input
              type="text"
              size="50"
              maxlength="40"
              name="name"
              pattern="[a-zA-Z\s]+$"
            />
          </p>
          <p>
            Descrição:{" "}
            <input type="text" size="60" maxlength="40" name="description" />
          </p>
          <p>
            Valor: <input type="number" size="40" maxlength="40" name="price" />
          </p>
          <br />
          <br />
          <button type="submit">ENVIAR PRODUTO</button>
        </form>
      </div>
      <hr />
      <br />
      <h2>ALTERAÇÃO OU EXCLUSÃO DE PRODUTOS</h2>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Alterar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, description, price }, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{description}</td>
              <td>{price}</td>
              <td>
                <i className="fa fa-cut" onClick={() => [setDataEdit(true)]} />
                {dataEdit ? (
                  <>
                    <form onSubmit={(e) => handleFormEdit(e, id)}>
                      <p>
                        Novo Nome do Produto:
                        <input
                          type="text"
                          size="50"
                          name="name"
                          pattern="[a-zA-Z\s]+$"
                          placeholder={name}
                        />
                      </p>
                      <p>
                        Nova Descrição:
                        <input
                          type="text"
                          size="60"
                          name="description"
                          placeholder={description}
                        />
                      </p>
                      <p>
                        Novo Valor:
                        <input
                          type="number"
                          size="40"
                          name="price"
                          placeholder={price}
                        />
                      </p>
                      <button type="submit">ALTERAR PRODUTO</button>
                    </form>
                  </>
                ) : null}
              </td>
              <td>
                <i className="fa fa-trash-o" onClick={() => handleRemove(id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <hr />
    </>
  );
}

export default Cadastro;
