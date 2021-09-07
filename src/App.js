import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={() => <div>/</div>} />
          <Route exact path="/search" component={() => <div>search</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
