import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import routes from './config/routes';

ReactDOM.render(
  routes,
  document.getElementById('app')
);
