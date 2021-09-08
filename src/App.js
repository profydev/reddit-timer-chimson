import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Router>
      <div>
        <Normalize />
        <GlobalStyles />
        App Placeholder
        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/search" exact>
            Search
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
