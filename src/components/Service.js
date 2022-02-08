// export const getPokemons = (url) => {
//   const data = fetch(url).then((response) => response.json());
//   const pokemons = data.results;

//   return pokemons;
// };

export async function getPokemons(url) {
  try {
    const response = await fetch(url);
    const { results } = await response.json();
    return results;
  } catch {
    const error = new Error("There is an error");
    return error;
  }
}
