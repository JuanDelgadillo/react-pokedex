import React, { Component } from 'react';

import PokemonHeaderInformation from './PokemonHeaderInformation';
import PokemonEvolution from './PokemonEvolution';
import PokemonImage from './PokemonImage';
import PokemonStats from './PokemonStats';
import PokemonData from './PokemonData';
import Comment from './Comment';

class Pokemon extends Component {
  constructor () {
    super();
    this.state = {
      tabSelected: 1
    }
  }

  selectTab (tab) {
    this.setState({ tabSelected: tab });
  }

  render () {
    return (
      <div>
        <div className="page-header">
          <PokemonHeaderInformation id={ this.props.id } name={ this.props.name } species={ this.props.species } />
        </div>
        <div className="row">
          <div className="col-md-6">
            <PokemonImage name={ this.props.name } />
          </div>
          <div className="col-md-6">
            <ul className="nav nav-tabs nav-justified">
              <li className={ this.state.tabSelected === 1 && 'active' }><a onClick={ () => this.selectTab(1) }>Pokédex</a></li>
              <li className={ this.state.tabSelected === 2 && 'active' }><a onClick={ () => this.selectTab(2) }>Stats</a></li>
              <li className={ this.state.tabSelected === 3 && 'active' }><a onClick={ () => this.selectTab(3) }>Evolution</a></li>
            </ul>
            <div className="tab-content">
              { this.state.tabSelected === 1 &&
                <PokemonData type={ this.props.type } abilities={ this.props.abilities } height={ this.props.height } weight={ this.props.weight } />
              }

              { this.state.tabSelected === 2 &&
                <PokemonStats stats={ this.props.stats } />
              }

              { this.state.tabSelected === 3 &&
                <PokemonEvolution evolution={ this.props.evolution } />
              } 
              
            </div>
          </div>
        </div>

        <Comment pokemonName={ this.props.name } />

      </div>
    )
  }
}

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