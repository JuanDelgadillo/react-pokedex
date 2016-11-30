import React, { Component } from 'react';

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
      <div className="container-fluid">
        <div className="page-header">
          <h1>
            { this.props.name } 
            <small> { this.props.species } </small>
            <span className="label label-primary pull-right">#{ this.props.id }</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className="avatar center-block" src={ `app/assets/images/pokemons/${ this.props.name.toLowerCase() }.jpg` } />
          </div>
          <div className="col-md-6">
            <ul className="nav nav-tabs nav-justified">
              <li className={ this.state.tabSelected === 1 && 'active' }><a href="#" onClick={ () => this.selectTab(1) }>Pokédex</a></li>
              <li className={ this.state.tabSelected === 2 && 'active' }><a href="#" onClick={ () => this.selectTab(2) }>Stats</a></li>
              <li className={ this.state.tabSelected === 3 && 'active' }><a href="#" onClick={ () => this.selectTab(3) }>Evolution</a></li>
            </ul>
            <div className="tab-content">
            { this.state.tabSelected === 1 &&
              <div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Type</strong>
                    <span className="pull-right">
                      {
                        this.props.type.map((type, index) => (
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
                    <span className="pull-right">{ this.props.height }</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Weight</strong>
                    <span className="pull-right">{ this.props.weight }</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Abilities</strong>
                    <ul>
                      {
                        this.props.abilities.map((ability, index) => (
                            <li key={index}>{ ability }</li>
                          )
                        )
                      }
                    </ul>
                  </li>
                </ul>
              </div>
            }


            { this.state.tabSelected === 2 &&
              <div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>HP</strong>
                    <span className="badge">{ this.props.stats.hp }</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Attack</strong>
                    <span className="badge">{ this.props.stats.attack }</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Defense</strong>
                    <span className="badge">{ this.props.stats.defense }</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Special Attack</strong>
                    <span className="badge">{ this.props.stats['sp.atk'] }</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Special Defense</strong>
                    <span className="badge">{ this.props.stats['sp.def'] }</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Speed</strong>
                    <span className="badge">{ this.props.stats.speed }</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Total</strong>
                    <span className="badge">{ this.props.stats.total }</span>
                  </li>
                </ul>
              </div>
            }

           { this.state.tabSelected === 3 &&
              <div>
                {
                  this.props.evolution.map((evolution, index) =>(
                    <div className="text-center" key={ index }>
                      <a href="#">
                        <img src={ `app/assets/images/pokemons/${ evolution.toLowerCase() }.jpg` } width="160" />
                        <p>
                          <strong>{ evolution }</strong>
                        </p>
                      </a>
                      { index !== this.props.evolution.length -1 &&
                        <span className="glyphicon glyphicon-arrow-down"></span>
                      }
                    </div>
                    )
                  )
                }
              </div>
           } 
              


            </div>
          </div>
        </div>



        <button className="btn btn-primary">Show comments <span className="badge">2</span></button>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">Comments <button className="close pull-right">&times;</button></h1>
          </div>
          <div className="panel-body">
            <form className="form-horizontal" role="form">
              <div className="form-group">
                <div className="col-sm-6">
                  <textarea placeholder={ `Please tell us what do you think about ${ this.props.name } ` } className="form-control"></textarea>
                </div>
                <div className="col-sm-4">
                  <input type="email" placeholder="Please enter your email address" className="form-control" />
                  <label>
                    <input id="anonymous" type="checkbox" />
                    Anonymous
                  </label>
                </div>
                <div className="col-sm-2">
                  <button className="btn btn-lg">Comment</button>
                </div>
              </div>
            </form>
            <blockquote>
              <p>OMG Bulbasaur is AMAZING!!!</p>
              <footer>
                Comment by <a href="mailto:pepe@pepe.com">pepe@pepe.com</a> on <span>Sep 12, 2014, 11:00:00 PM</span>
              </footer>
            </blockquote>
            <blockquote>
              <p>Nah, I hate it -_-</p>
              <footer>
                Comment by <em>Anonymous</em> on <span>Sep 12, 2014, 11:00:00 PM</span>
              </footer>
            </blockquote>
          </div>
        </div>



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