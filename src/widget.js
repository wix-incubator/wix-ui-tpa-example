import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/Widget';

$(document).ready(() => {
  ReactDOM.render(
    <Widget/>,
    document.getElementById('root')
  );
});


