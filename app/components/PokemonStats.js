import React from 'react';

const PokemonStats = (props) => (
<div>
  <ul className="list-group">
    <li className="list-group-item">
      <strong>HP</strong>
      <span className="badge">{ props.stats.hp }</span>
    </li>
    <li className="list-group-item">
      <strong>Attack</strong>
      <span className="badge">{ props.stats.attack }</span>
    </li>
    <li className="list-group-item">
      <strong>Defense</strong>
      <span className="badge">{ props.stats.defense }</span>
    </li>
    <li className="list-group-item">
      <strong>Special Attack</strong>
      <span className="badge">{ props.stats['sp.atk'] }</span>
    </li>
    <li className="list-group-item">
      <strong>Special Defense</strong>
      <span className="badge">{ props.stats['sp.def'] }</span>
    </li>
    <li className="list-group-item">
      <strong>Speed</strong>
      <span className="badge">{ props.stats.speed }</span>
    </li>
    <li className="list-group-item">
      <strong>Total</strong>
      <span className="badge">{ props.stats.total }</span>
    </li>
  </ul>
</div>
);

export default PokemonStats;