import React from 'react';

const PokemonHeaderInformation = (props) => (
  <h1>
    { props.name } 
    <small> { props.species } </small>
    <span className="label label-primary pull-right">#{ props.id }</span>
  </h1>
);

export default PokemonHeaderInformation;