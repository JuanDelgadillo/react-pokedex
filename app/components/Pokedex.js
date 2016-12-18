import React, { Component } from 'react';
import { Link } from 'react-router';

import { getPokemons } from '../utils/pokemonHelpers';
import PokemonImage from './PokemonImage';
import PokemonType from './PokemonType';
import PokemonHeaderInformation from './PokemonHeaderInformation';

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
            <div key={ index } className='pokemon'>
              <Link to={ `pokemon/${pokemon.name}` }>
                <PokemonHeaderInformation id={ pokemon.id } name={ pokemon.name } species={ pokemon.species } />
                <PokemonImage name={ pokemon.name } />
                <div className="text-center">
                  <PokemonType type={ pokemon.type } />
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}