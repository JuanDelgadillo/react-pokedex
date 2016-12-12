import React, { Component, PropTypes } from 'react';

class Comment extends Component {
  constructor () {
    super();
    this.state = {
      showComments: false,
      comment: {
        body: '',
        email: '',
        anonymous: false
      },
      comments: []
    }
    this.handleCommentAnonymousChange = this.handleCommentAnonymousChange.bind(this);
    this.handleCommentBodyChange = this.handleCommentBodyChange.bind(this);
    this.handleCommentEmailChange = this.handleCommentEmailChange.bind(this);
  }

  handleCommentBodyChange (event) {
    this.setState({
      comment: Object.assign(this.state.comment, { body: event.target.value })
    });
  }

  handleCommentEmailChange (event) {
    this.setState({
      comment: Object.assign(this.state.comment, { email: event.target.value })
    });
  }

  handleCommentAnonymousChange (event) {
    this.setState({
      comment: Object.assign(this.state.comment, { anonymous: event.target.checked })
    });
  }

  toggle () {
    console.log(this.state)
    this.setState({
      showComments: !this.state.showComments
    });
  }

  render () {
    return (
      <div>
        { !this.state.showComments &&
          <button className="btn btn-primary" onClick={ () => this.toggle() }>Show comments <span className="badge">{ this.state.comments.length }</span></button>
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
                    <textarea value={ this.state.comment.body } onChange={ this.handleCommentBodyChange } placeholder={ `Please tell us what do you think about ${ this.props.pokemonName } ` } className="form-control"></textarea>
                  </div>
                  <div className="col-sm-4">
                    <input type="email" value={ this.state.comment.email } disabled={ this.state.comment.anonymous } onChange={ this.handleCommentEmailChange } placeholder="Please enter your email address" className="form-control" />
                    <label>
                      <input id="anonymous" checked={ this.state.comment.anonymous } onChange={ this.handleCommentAnonymousChange } type="checkbox" />
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
                  Comment by

                  { !this.state.comment.anonymous &&
                    <a href={ `mailto:${ this.state.comment.email }` }> { this.state.comment.email } </a>
                  }

                  { this.state.comment.anonymous &&
                    <em> Anonymous </em> 
                  }

                   on <span>{ this.state.comment.date }</span>
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