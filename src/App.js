import React from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div> 
      <Router>
          <Header />

        <Switch>
        <Route path="/search">
              <SearchPage />
          </Route>

          <Route path="/">
              <Home />
          </Route>
         
        </Switch>
          <Footer />
      </Router>         
    </div>

  );
}

export default App;
