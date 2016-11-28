import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = (props) => {
    return (
      <div>Hello world =) </div>
    )
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
