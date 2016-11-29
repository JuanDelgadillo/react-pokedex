import React from 'react';

const PokedexNavbar = () => (
 <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img src="app/assets/images/logo.png" />
          Pokédex
        </a>
      </div>
    </div>
  </div>
);

export default PokedexNavbar;