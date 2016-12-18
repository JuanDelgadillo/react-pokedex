import React, { Component } from 'react';
import { Link } from 'react-router';

import { getPokemons, getPokemonsByType } from '../utils/pokemonHelpers';
import PokemonImage from './PokemonImage';
import PokemonType from './PokemonType';
import PokemonHeaderInformation from './PokemonHeaderInformation';

export default class Pokedex extends Component {
  constructor () {
    super();
    this.state = {
      pokemons: []
    }
    this.pokemonType = null;
  }

  async componentDidMount() {
    let pokemons;
    this.pokemonType = this.context.router.params.type;
    if (this.pokemonType) {
      pokemons = await getPokemonsByType(this.pokemonType);
    } else {
      pokemons = await getPokemons();
    }

    this.setState({
      pokemons: pokemons
    })
  }

  render () {
    return (
      <div>
        <div className="page-header">
          <h1>Pokédex <small className="pull-right">Showing <span className="badge">{ this.state.pokemons.length }</span> Pokémons &nbsp;</small> </h1>
          { this.pokemonType &&
            <h2>
              <span className={ `label type-${this.pokemonType.toLowerCase() }` }>{ this.pokemonType }</span>
            </h2>
          }
        </div>
        {
          this.state.pokemons.map((pokemon, index) => (
            <div key={ index } className='pokemon'>
              <Link to={ `pokemon/${pokemon.name}` }>
                <PokemonHeaderInformation id={ pokemon.id } name={ pokemon.name } species={ pokemon.species } />
                <PokemonImage name={ pokemon.name } />
              </Link>
              <div className="text-center">
                <PokemonType type={ pokemon.type } />
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

Pokedex.contextTypes = {
  router: React.PropTypes.object.isRequired
}