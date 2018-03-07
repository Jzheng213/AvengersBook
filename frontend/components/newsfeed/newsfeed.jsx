import React from 'react';
import { Route, Redirect } from 'react-router'

const NewsFeed = (props) => {

  const handleLogout = () => {
    props.logout();
  };

  return(
    <div>
      <h1>Facebook</h1>
      <button onClick={props.handleLogout}>Log Out</button>
    </div>
  );
};

export default NewsFeed;
