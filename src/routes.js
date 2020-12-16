import { Route, Switch, BrowserRouter, NotFoundRoute } from 'react-router-dom';

import { Home, Login } from './components/pages';
import LoggedWrapper from './utils/LoggedWrapper';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Login} path="/" exact/>
      <Route component={Login} path="/login" exact/>
      <LoggedWrapper>
        <Route component={Home} path="/home" exact/>
      </LoggedWrapper>
    </Switch>
  </BrowserRouter>
);

export default Routes;
