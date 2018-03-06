//React
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
//Components
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginSignin from './session_form/login_signin';


const App = () => {
  return(
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>AvengersBook</h1>
        </Link>
      </header>

      <Switch>
        <AuthRoute exact path="/login" component={LoginSignin} />
      </Switch>
    </div>
  );
};


export default App;
