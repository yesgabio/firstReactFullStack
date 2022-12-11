import api from "../services/api";
import { useEffect, useState } from "react";
import img from "../assets/Flor.jpg";

function Produtos() {
  const [products, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        alert("Erro ao buscar usuários");
      });
  }, []);


  return (
    <>
      <h1>PRODUTOS</h1>
      <div className="produtos">
      {products?.map(({ name, description, price }, index) => {
          return (
                <div className="produto">
                <img src={img} />
                <figcaption key={index}>
                <li >{name}</li>
                <li >{description}</li>
                <li >R${price}</li>
                </figcaption>
                </div>

          );
        })}
        </div>
        <hr />
    </>
  );
      
}

export default Produtos;
