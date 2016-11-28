import React from 'react';

const Pokemon = (props) => (

  <div className="container">
    <div className="page-header">
      <h1>
        { props.name } 
        <small> { props.species } </small>
        <span className="label label-primary pull-right">#{ props.id }</span>
      </h1>
    </div>
    <div className="row">
      <div className="col-md-6">
        <img className="avatar center-block" src={ `app/assets/images/pokemons/${ props.name.toLowerCase() }.jpg` } />
      </div>
      <div className="col-md-6">
        <ul className="nav nav-tabs nav-justified">
          <li className="active"><a href="#">Pokédex</a></li>
          <li><a href="#">Stats</a></li>
          <li><a href="#">Evolution</a></li>
        </ul>
        <div className="tab-content">
          <div>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Type</strong>
                <span className="pull-right">{ props.type.join(', ') }</span>
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
                <span className="pull-right">{ props.abilities.join(', ') }</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Pokemon.defaultProps = {
  id: "001",
  name: "Bulbasaur",
  species: "Seed Pokémon",
  type: [ "Grass", "Poison" ],
  height: "2′4″ (0.71m)",
  weight: "15.2 lbs (6.9 kg)",
  abilities: [ "Overgrow", "Chlorophyll"]
}

export default Pokemon;