import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1> Consumir REST API </h1>
      <p>
        {" "}
        Voy a practicar llamadas a varios APIs y renderizar listados de
        elementos.{" "}
      </p>
      <h2> APIs publicas </h2>
      <ul>
        <li>
          {" "}
          <Link to="/users"> JSONPlaceholer </Link>
        </li>
        <li>
          <Link to="/pokemons"> Pokemon </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
