import axios from 'axios';

let _mainResource = 'app/data/pokemons.json';
let _localStorage = window.localStorage
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

export let getComments = (pokemon) => {
  var comments = _localStorage.getItem(pokemon)
  (!comments) ? comments = [] : comments = JSON.parse(comments)
  return comments
}

export let saveComment = (pokemon, comment) => {
  let comments = this.getComments(pokemon)
  comments.push(comment)
  _localStorage.setItem(pokemon, JSON.stringify(comments))
}