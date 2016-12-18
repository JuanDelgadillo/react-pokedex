import React from 'react';
import { Link } from 'react-router';

const PokemonType = (props) => (
  <span className='pokemon-type'>
    {
      props.type.map((type, index) => (
        <Link to={ `pokemons/type/${type}` } key={index}>
          <span className={ `label type type-${ type.toLowerCase() }` } >
            { type }
          </span>
        </Link>
        )
      )
    }
  </span>
);

export default PokemonType;