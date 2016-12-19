import React from 'react';
import { Link } from 'react-router';

const PokedexNavbar = () => (
 <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to='/' className="navbar-brand">
          <img src="app/assets/images/logo.png" />
          Pokédex
        </Link>
      </div>
    </div>
  </div>
);

export default PokedexNavbar;