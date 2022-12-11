import Contato from "./contato.jsx";
import Produtos from "./produtos.jsx";
import Sobre from "./sobre.jsx";
import Cadastro from "./cadastro.jsx";
import Users from "./users.jsx";

function Index(props) {
  const { component } = props;
  console.log(component);

  const renderComponent = () => {
    switch (component) {
      case "index":
        return (
        <>
        <div id="imagensIniciais">
          <div id="inspiration" className="imagensIniciais">
            <h1>INSPIRAÇÃO</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis voluptatem nam tempore, tempora error dolorum quae consequatur pariatur aut architecto similique laboriosam eum beatae eligendi nisi quisquam reiciendis? Eveniet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque rem libero fugiat voluptas tenetur delectus, quod sequi nostrum a similique fugit nisi eligendi voluptatibus necessitatibus quibusdam reiciendis consequatur esse.
          </p>
          <div id="product" className="imagensIniciais">
            <h1>PRODUTOS</h1>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sequi quasi perspiciatis dolore fugiat ullam maiores nemo eligendi natus soluta neque ad, dolorem omnis porro. Facere totam dolorem architecto minima.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum aliquid delectus vero illum iure quia officiis asperiores facere corporis corrupti amet illo iusto, et earum in unde animi voluptas voluptate!
          </p>
        </div>
        <hr />
        <img src="/src/assets/pexels-theglory-302588.jpg" alt="" />
        <div className="entrega">
        <h5>
          Entregamos em toda a cidade!
        </h5>
        </div>
        <hr />
        </>
        );
      case "contato":
        return <Contato />;
      case "produtos":
        return <Produtos />;
      case "sobre":
        return <Sobre />;
      case "cadastro":
        return <Cadastro />;
      case "users":
        return <Users />;
      default:
        return null;
    }
  };

  return <main className="container container-fluid">{renderComponent()}</main>;
}
export default Index;
