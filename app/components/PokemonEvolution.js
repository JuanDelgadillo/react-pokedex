import React from 'react';
import { Link } from 'react-router';

const PokemonEvolution = (props) => {
  return (
    <div>
      {
        props.evolution.map((evolution, index) =>(
          <div className="text-center" key={ index }>
            <a style={ { cursor: 'pointer' } } onClick={ () => props.dinamicPokemonChangeHandler(evolution) }>
              <img src={ `app/assets/images/pokemons/${ evolution.toLowerCase() }.jpg` } width="160" />
              <p>
                <strong>{ evolution }</strong>
              </p>
            </a>
            { index !== props.evolution.length -1 &&
              <span className="glyphicon glyphicon-arrow-down"></span>
            }
          </div>
          )
        )
      }
    </div>
  );
}

export default PokemonEvolution;