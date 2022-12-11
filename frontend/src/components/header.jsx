import { useState } from "react";
import Index from "../pages/index.jsx";
function Header() {
  const [componente, setComponente] = useState("index");
  return (
    <>
    <div className="inicio">
      <h1>GROW FLORICULTURA</h1>
    </div>
      <ul className="nav">
        <li onClick={() => setComponente("index")}>
          <a aria-current="page" href="#">
            Página inicial
          </a>
        </li>
        <li onClick={() => setComponente("sobre")}>
          <a aria-current="page" href="#">
            Sobre
          </a>
        </li>
        <li onClick={() => setComponente("contato")}>
          <a href="#">
            Contato
          </a>
        </li>
        <li onClick={() => setComponente("produtos")}>
          <a href="#">
            Produtos
          </a>
        </li>
        <li onClick={() => setComponente("cadastro")}>
          <a href="#">
            Gerenciamento
          </a>
        </li>
        {/* <li onClick={() => setComponente("users")}>
          <a  href="#">
            Usuários
          </a>
        </li> */}
      </ul>
      <Index component={componente} />
    </>
  );
}
export default Header;
