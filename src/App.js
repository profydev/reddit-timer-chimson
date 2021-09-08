import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Normalize />
          <GlobalStyles />
          App Placeholder
          <Switch>
            <Route path="/search">Search</Route>
            <Route path="/">Home</Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
