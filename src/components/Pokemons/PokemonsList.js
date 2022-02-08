import { useState, useEffect } from "react";

import Pokemon from "./Pokemon";
// import data from "../../data.json";
import { getPokemons } from "../Service";

const PokemonsList = () => {
  // const pokemons = data.results;

  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let results = data.results;
  //       setPokemons(results);
  //     });
  // }, []);

  useEffect(() => {
    getPokemons(apiUrl).then(setPokemons);
  }, [apiUrl]);

  return (
    <>
      <h1> Pokemon Go </h1>
      <ul>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </ul>
    </>
  );
};

export default PokemonsList;
