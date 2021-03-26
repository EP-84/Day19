// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class App extends React.Component {
  render()  {

const name = "World";

      return (
          <div className="App">
              <h1>Hello, {name}!</h1>
          </div>
       )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

