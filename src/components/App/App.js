import React, { Component } from 'react';
import Search from '../Search';
import Favorites from '../Favorites'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class App extends Component {

  render() {
    return (  
        <Router>
          <div className='app'>
            <nav>
              <ul id='navBar'>
                <li><Link to='/'>Search</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li>
              </ul>
            </nav>
          </div>

          <div>
            <Route exact path="/" component={Search} />
            <Route path="/favorites" component={Favorites} />
          </div>
        </Router>
    );
  }
  
}

export default App;
