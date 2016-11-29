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


          <div>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>HP</strong>
                <span className="badge">{ props.stats.hp }</span>
              </li>
              <li className="list-group-item">
                <strong>Attack</strong>
                <span className="badge">{ props.stats.attack }</span>
              </li>
              <li className="list-group-item">
                <strong>Defense</strong>
                <span className="badge">{ props.stats.defense }</span>
              </li>
              <li className="list-group-item">
                <strong>Special Attack</strong>
                <span className="badge">{ props.stats['sp.atk'] }</span>
              </li>
              <li className="list-group-item">
                <strong>Special Defense</strong>
                <span className="badge">{ props.stats['sp.def'] }</span>
              </li>
              <li className="list-group-item">
                <strong>Speed</strong>
                <span className="badge">{ props.stats.speed }</span>
              </li>
              <li className="list-group-item">
                <strong>Total</strong>
                <span className="badge">{ props.stats.total }</span>
              </li>
            </ul>
          </div>

          
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
  abilities: [ "Overgrow", "Chlorophyll"],
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    "sp.atk": 65,
    "sp.def": 65,
    speed: 45,
    total: 318
  },
  evolution: [ "Bulbasaur", "Ivysaur", "Venusaur" ]
}

export default Pokemon;