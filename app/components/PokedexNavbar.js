import React from 'react';
import { Link } from 'react-router';

const PokedexNavbar = () => (
 <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to='/' className="navbar-brand">
          <img src="app/assets/images/logo.png" />
          Pokédex |
        </Link>
        <a href="https://twitter.com/delgadillojuanm" className="navbar-brand author" target="_blank">Written on React by Juan Delgadillo</a>
      </div>
    </div>
    <a href="https://github.com/JuanDelgadillo/react-pokedex" target="_blank">
      <img style={{ position:'absolute', top: 0, right: 0, border: 0, zIndex:1031 }}src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" />
    </a>
  </div>
);

export default PokedexNavbar;