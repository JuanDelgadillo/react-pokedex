import React, { Component } from 'react';

import { getPokemons } from '../utils/pokemonHelpers';

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
              <img src={ `app/assets/images/pokemons/${ pokemon.name.toLowerCase() }.jpg` } />
            </div>
          ))
        }
      </div>
    )
  }
}