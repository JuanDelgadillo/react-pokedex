import axios from 'axios';

let _mainResource = 'app/data/pokemons.json';

export async function getPokemons () {
  let resolve = await axios.get(_mainResource);
  return resolve.data;
}