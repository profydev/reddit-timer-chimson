import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <div>/</div>} />
        <Route exact path="/search" component={() => <div>search</div>} />
      </Switch>
    </Router>
  );
}

export default App;
