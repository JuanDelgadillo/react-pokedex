import React, { Component } from 'react';
import { Link } from 'react-router';
import { _ } from 'underscore';

import { getPokemons, getPokemonsByType } from '../utils/pokemonHelpers';
import PokemonImage from './PokemonImage';
import PokemonType from './PokemonType';
import PokemonHeaderInformation from './PokemonHeaderInformation';

export default class Pokedex extends Component {
  constructor () {
    super();
    this.state = {
      pokemons: [],
      groupped: []
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
      pokemons: pokemons,
      groupped: this.partition(pokemons, 4)
    })
  }

  partition (data, n) {
    return _.chain(data).groupBy((element, index) => Math.floor(index / n)).toArray().value()
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
          this.state.groupped.map((group, indexGroupped) => (
            <div className='row' key={ indexGroupped }>
              {
                group.map((pokemon, indexGroup) => (
                  <div className='col-lg-3' key={ indexGroup }>
                        <div className="pokemon panel panel-primary">
                          <div className="panel-heading">
                            <PokemonHeaderInformation id={ pokemon.id } name={ pokemon.name } species={ pokemon.species } />
                          </div>
                          <div className="panel-body">
                            <Link to={ `pokemon/${pokemon.name}` }>
                              <PokemonImage name={ pokemon.name } />
                            </Link>
                          </div>
                          <div className="panel-footer">
                            <div className="text-center">
                              <PokemonType type={ pokemon.type } />
                            </div>
                          </div>
                        </div>
                  </div>
                ))
              }
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