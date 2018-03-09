
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import NavBarContainer from '../nav_bar/nav_bar_container';
import NewsFeedContainer from '../newsfeed/newsfeed_container';
import UserContainer from '../user/user_container';

const Main = () => {
  return(
    <div>
      <nav className='N'>
        <NavBarContainer />
      </nav>
      <div>
        <Switch>
          <Route exact path ='/newsfeed' component={NewsFeedContainer} />
          <Route path ='/user' component={UserContainer} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
