import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <div>/</div>} />
        <Route exact path="/search" component={() => <div>search</div>} />
      </Switch>
    </div>
  );
}

export default App;
