
import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import NavBarContainer from '../nav_bar/nav_bar_container';
import NewsFeedContainer from '../newsfeed/newsfeed_container';
import UserContainer from '../user/user_container';

const Main = () => {
  return(
    <div className='main'>
      <NavBarContainer />
      <div>
        <Switch>
          <Route exact path ='/newsfeed' component={NewsFeedContainer} />
          <Route path ='/user/:userId' component={UserContainer} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Main);
