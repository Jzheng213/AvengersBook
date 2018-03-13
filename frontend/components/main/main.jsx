
import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import NavBarContainer from '../nav_bar/nav_bar_container';
import NewsFeedContainer from '../newsfeed/newsfeed_container';
import UserContainer from '../profile/profile_container';

const Main = () => {
  return(
    <div className='main'>
      <NavBarContainer />
      <Switch>
        <Route exact path ='/newsfeed' component={NewsFeedContainer} />
        <Route path ='/user/:userId' component={UserContainer} />
      </Switch>
    </div>
  );
};

export default withRouter(Main);
