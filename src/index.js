import React from 'react';
import ReactDOM from 'react-dom';
import List from "./components/List";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Album from './components/Album';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import Artist from './components/Artist';

ReactDOM.render(
  <Router>
    <div className="container">
      <div className="card">
          <div className="card-heading">

              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/artist'>Artistas</Link></li>
                <li><Link to='/album'>Album</Link></li>
                <li><Link to='/tracks'>Tracks</Link></li>
              </ul>

              <Route exact path="/" component={App} />
              <Route path="/tracks" component={List} />
              <Route path="/album" component={Album} />
              <Route path='/artist' component={Artist} />

          </div>
          
        </div>
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
