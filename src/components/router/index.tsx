import * as React from 'React';
import { Switch, Route } from 'react-router-dom';

import SavingGoal from '../saving-goal';
import Home from '../home';

const Router = () => {
  return (
    <Switch>
      <Route path="/saving-goal/:key">
        <SavingGoal />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Router;
