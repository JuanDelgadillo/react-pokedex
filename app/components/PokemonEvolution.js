import React from 'react';

const PokemonEvolution = (props) => (
  <div>
    {
      props.evolution.map((evolution, index) =>(
        <div className="text-center" key={ index }>
          <a href="#">
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

export default PokemonEvolution;