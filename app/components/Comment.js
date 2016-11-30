import React, { Component, PropTypes } from 'react';

class Comment extends Component {
  constructor () {
    super();
    this.state = {
      showComments: false,
      comments: []
    }
  }

  toggle () {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  render () {
    return (
      <div>
        { !this.state.showComments &&
          <button className="btn btn-primary" onClick={ () => this.toggle() }>Show comments <span className="badge">2</span></button>
        }
        { this.state.showComments &&
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">Comments <button className="close pull-right" onClick={ () => this.toggle() }>&times;</button></h1>
            </div>
            <div className="panel-body">
              <form className="form-horizontal" role="form">
                <div className="form-group">
                  <div className="col-sm-6">
                    <textarea placeholder={ `Please tell us what do you think about ${ this.props.pokemonName } ` } className="form-control"></textarea>
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
        }
      </div>
    )
  }
}

Comment.propTypes = {
  pokemonName: PropTypes.string.isRequired
}

export default Comment;