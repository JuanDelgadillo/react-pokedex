import React from 'react';

const PokemonImage = (props) => {
  if (!props.name) return null

  let pokemonName = props.name
                    .replace('♀', 'f')
                    .replace('♂', 'm')
                    .replace(/\W+/g, "")
                    .toLowerCase();
  return (
    <img className="avatar center-block" src={ `app/assets/images/pokemons/${ pokemonName }.jpg` } />
  );
} 

export default PokemonImage;