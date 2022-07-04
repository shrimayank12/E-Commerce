import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>

      <Route exact path="/category/:id">
        Category
      </Route>

      <Route exact path="/checkout">
        Checkout
      </Route>

      <Route>Error 404: Page Not Found</Route>
    </Switch>
  );
}

export default App;
