import React from 'react';

const PokemonType = (props) => (
  <span className='pokemon-type'>
    {
      props.type.map((type, index) => (
        <span className={ `label type type-${ type.toLowerCase() }` } key={index} >
          { type }
        </span>
        )
      )
    }
  </span>
);

export default PokemonType;