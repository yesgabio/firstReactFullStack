import api from "../services/api";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        alert("Erro ao buscar usuários");
      });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    api.post("/users", newUser).then((response) => {
      console.log(response);
      setUsers([...users, response.data]);
      alert("Usuário cadastrado com sucesso!");
    });
  };

  return (
    <>
      <h1>USUÁRIOS</h1>
      <h6>Lista de usuários cadastros no banco</h6>
      <ul>
        {users?.map((user, key) => {
          return (
            <>
              <li key={key}>{user.name}</li>
              <img src={`/frontend/src/assets/${key}.png`} />
            </>
          );
        })}
      </ul>

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="form">
          <p>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              size="50"
              maxlength="40"
              name="name"
              pattern="[a-zA-Z\s]+$"
            />
          </p>
          <p>
            <label htmlFor="idade">E-mail</label>
            <input type="email" size="40" maxlength="40" name="email" />
          </p>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </>
  );
}

export default Users;
