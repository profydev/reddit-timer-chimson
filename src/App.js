import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
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
          <Header/>
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
