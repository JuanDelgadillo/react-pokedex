import React from 'react';

const Pokemon = (props) => (
  <div>
    <h1>{ props.name } #{ props.id }</h1>
    <h2>{ props.species }</h2>
    <img src="app/assets/images/bulbasaur.jpg" />
    <h2>Pokédex</h2>
    <ul>
      <li><strong>Type</strong> { props.type.join(', ') } </li>
      <li><strong>Height</strong> { props.height } </li>
      <li><strong>Weight</strong> { props.weight } </li>
      <li><strong>Abilities</strong> { props.abilities.join(', ') } </li>
    </ul>
  </div>
)

Pokemon.defaultProps = {
  id: "001",
  name: "Bulbasaur",
  species: "Seed Pokémon",
  type: [ "Grass", "Poison" ],
  height: "2′4″ (0.71m)",
  weight: "15.2 lbs (6.9 kg)",
  abilities: [ "Overgrow", "Chlorophyll"]
}

export default Pokemon;