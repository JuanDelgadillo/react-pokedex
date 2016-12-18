import React, { Component } from 'react';

import { getPokemons } from '../utils/pokemonHelpers';
import PokemonImage from './PokemonImage';

export default class Pokedex extends Component {
  constructor () {
    super();
    this.state = {
      pokemons: []
    }
  }

  async componentDidMount() {
    let pokemons = await getPokemons();
    this.setState({
      pokemons: pokemons
    })
  }

  render () {
    return (
      <div>
        <div className="page-header">
          <h1>Pokédex</h1>
        </div>
        {
          this.state.pokemons.map((pokemon, index) => (
            <div key={ index }>
              <h1> { pokemon.name } <small>{ pokemon.species }</small> </h1>
              <PokemonImage name={ pokemon.name } />
            </div>
          ))
        }
      </div>
    )
  }
}