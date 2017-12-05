import React, { Component } from 'react';
import List from "./List";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import AlbumDetail from './AlbumDetail';

class App extends Component {



  render() {
    return (
      <div className="container">
        <div className="card">
            <div className="card-heading">
              <h3>Welcome to React</h3>
            </div>
            <div className='card-body'>
              <img src='https://i.imgur.com/htsHBkJ.jpg' />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
