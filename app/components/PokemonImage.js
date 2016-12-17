import React from 'react';

const PokemonImage = (props) => (
  <img className="avatar center-block" src={ `app/assets/images/pokemons/${ props.name.toLowerCase() }.jpg` } />
);

export default PokemonImage;