import React, { Component } from 'react';

import PokemonHeaderInformation from './PokemonHeaderInformation';
import { getPokemonByName } from '../utils/pokemonHelpers';
import PokemonEvolution from './PokemonEvolution';
import PokemonImage from './PokemonImage';
import PokemonStats from './PokemonStats';
import PokemonData from './PokemonData';
import Comment from './Comment';

class Pokemon extends Component {
  constructor () {
    super();
    this.state = {
      pokemon: {
      id: '',
      name: '',
      species: '',
      type: [],
      height: '',
      weight: '',
      abilities: [],
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        "sp.atk": 0,
        "sp.def": 0,
        speed: 0,
        total: 0
      },
      evolution: []
    },
      tabSelected: 1
    }
  }

  async componentDidMount() {
    let pokemon = await getPokemonByName(this.props.routeParams.name)
    this.setState({
      pokemon: pokemon
    })
  }

  selectTab (tab) {
    this.setState({ tabSelected: tab });
  }

  render () {
    return (
      <div>
        <div className="page-header">
          <PokemonHeaderInformation id={ this.state.pokemon.id } name={ this.state.pokemon.name } species={ this.state.pokemon.species } />
        </div>
        <div className="row">
          <div className="col-md-6">
            <PokemonImage name={ this.state.pokemon.name } />
          </div>
          <div className="col-md-6">
            <ul className="nav nav-tabs nav-justified">
              <li className={ this.state.tabSelected === 1 && 'active' }><a onClick={ () => this.selectTab(1) }>Pokédex</a></li>
              <li className={ this.state.tabSelected === 2 && 'active' }><a onClick={ () => this.selectTab(2) }>Stats</a></li>
              <li className={ this.state.tabSelected === 3 && 'active' }><a onClick={ () => this.selectTab(3) }>Evolution</a></li>
            </ul>
            <div className="tab-content">
              { this.state.tabSelected === 1 &&
                <PokemonData type={ this.state.pokemon.type } abilities={ this.state.pokemon.abilities } height={ this.state.pokemon.height } weight={ this.state.pokemon.weight } />
              }

              { this.state.tabSelected === 2 &&
                <PokemonStats stats={ this.state.pokemon.stats } />
              }

              { this.state.tabSelected === 3 &&
                <PokemonEvolution evolution={ this.state.pokemon.evolution } />
              } 
              
            </div>
          </div>
        </div>

        <Comment pokemonName={ this.state.pokemon.name } />

      </div>
    )
  }
}

// Pokemon.defaultProps = {
//   id: "001",
//   name: "Bulbasaur",
//   species: "Seed Pokémon",
//   type: [ "Grass", "Poison" ],
//   height: "2′4″ (0.71m)",
//   weight: "15.2 lbs (6.9 kg)",
//   abilities: [ "Overgrow", "Chlorophyll"],
//   stats: {
//     hp: 45,
//     attack: 49,
//     defense: 49,
//     "sp.atk": 65,
//     "sp.def": 65,
//     speed: 45,
//     total: 318
//   },
//   evolution: [ "Bulbasaur", "Ivysaur", "Venusaur" ]
// }

export default Pokemon;