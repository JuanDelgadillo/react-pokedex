import React from 'react';

const PokemonData = (props) => (
  <div>
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Type</strong>
        <span className="pull-right">
          {
            props.type.map((type, index) => (
              <span className={ `label type type-${ type.toLowerCase() }` } key={index} >
                { type }
              </span>
              )
            )
          }
        </span>
      </li>
      <li className="list-group-item">
        <strong>Height</strong>
        <span className="pull-right">{ props.height }</span>
      </li>
      <li className="list-group-item">
        <strong>Weight</strong>
        <span className="pull-right">{ props.weight }</span>
      </li>
      <li className="list-group-item">
        <strong>Abilities</strong>
        <ul>
          {
            props.abilities.map((ability, index) => (
                <li key={index}>{ ability }</li>
              )
            )
          }
        </ul>
      </li>
    </ul>
  </div>
);

export default PokemonData;