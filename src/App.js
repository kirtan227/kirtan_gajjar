import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header.js';
import Main from './Main.js';
import Nav from './nav.js';
import Footer from './footer.js';
import Blog1 from './blog1.js';
import Blog2 from './blog2.js';
import Blog3 from './blog3.js';
import Blog4 from './blog4.js';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
      </div>
      <Route exact path='/' component={Main} />
      <Route path='/Blog1' component={Blog1} />
      <Route path='/Blog2' component={Blog2} />
      <Route path='/Blog3' component={Blog3} />
      <Route path='/Blog4' component={Blog4} />

      <Nav />
   		<Footer />
      </Router>
    );
  } 
}
