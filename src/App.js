import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'rsuite';
import Navs from './components/Navs';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

function App() {
  return (
    <Container>
      <Navs />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/category/:id">
          <Category />
        </Route>

        <Route exact path="/checkout">
          <Checkout />
        </Route>

        <Route>Error 404: Page Not Found</Route>
      </Switch>
    </Container>
  );
}

export default App;
