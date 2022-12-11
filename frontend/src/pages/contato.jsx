import api from "../services/api";
import { useState } from "react";

function Contato() {
  const [contacts, setContacts] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const newContact = {
      name: formData.get("name"),
      email: formData.get("email"),
      fone: formData.get("fone"),
      message: formData.get("message"),
    };
    api.post("/contacts", newContact).then((response) => {
      console.log(response);
      setContacts([...contacts, response.data]);
      alert("Contato enviado com sucesso!");
    });
  };
  return (
    <>
      <h1>CONTATO</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet rerum, nobis, culpa explicabo
              expedita magnam perferendis odit delectus exercitationem similique, dicta ut! Animi maiores molestiae
              optio! Harum, cum culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi
              perferendis incidunt laboriosam et odio, officiis nisi ea adipisci consequatur veritatis minima libero
              praesentium, beatae voluptatum expedita doloremque dolores doloribus? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ullam atque accusamus voluptas alias asperiores, nobis dicta nam aut velit
              accusantium quis tempore, est illum nemo eius veniam tempora dolorem non.</p>
        <div className="form">
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <p>Nome: <input type="text" size="50" maxLength="40" name="name"
                  pattern="[a-zA-Z\s]+$"/></p>
            <p>E-mail: <input type="email" size="40" maxLength="40" name="email"/></p>
            <p>Telefone: <input type="tel" size="20" maxLength="40" name="fone"
                  placeholder="(00)00000.0000" pattern="[0-9]+$"/></p>
            <br/>
            <textarea name="message" cols="70" rows="10" placeholder=" Digite sua mensagem "></textarea>
            <br/>
            <br/>
            <button type="submit">ENVIAR MENSAGEM</button>
          </form>
          </div>
          <hr />
    </>
  );
}

export default Contato;
