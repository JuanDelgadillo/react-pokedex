import axios from 'axios';

let _mainResource = 'app/data/pokemons.json';
let pokemons;

export async function getPokemons () {
  let resolve = await axios.get(_mainResource);
  return resolve.data;
}

export async function getPokemonByName (name) {
  pokemons = await getPokemons();
  return pokemons.filter(pokemon => pokemon.name === name)[0]
}

export async function getPokemonsByType (type) {
  pokemons = await getPokemons();
  return pokemons.filter(pokemon => pokemon.type.some(t => t === type ))
}