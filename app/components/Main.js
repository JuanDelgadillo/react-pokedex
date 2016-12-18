import React from 'react';
import PokedexNavbar from './PokedexNavbar';

const Main = (props) => (
  <div className ="main-container">
    <PokedexNavbar />
    { props.children }
  </div>
)

export default Main;