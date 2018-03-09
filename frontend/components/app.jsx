//React
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

//Components
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginSignin from './session_form/login_signin';
import Main from './main/main';

const App = () => {
  return(
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LoginSignin} />
        <ProtectedRoute path='/' component={Main} />
      </Switch>
    </div>
  );
};

export default App;
