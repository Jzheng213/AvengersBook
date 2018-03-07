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
import NewsFeedContainer from './newsfeed/newsfeed_container';

const App = () => {
  return(
    <div>

      <Switch>
        <AuthRoute exact path="/login" component={LoginSignin} />
        <ProtectedRoute exact path='/newsfeed' component={NewsFeedContainer} />
      </Switch>
    </div>
  );
};

export default App;
