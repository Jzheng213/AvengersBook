import React from 'react';
import { Route, Redirect } from 'react-router'

const NewsFeed = (props) => {
  return(
    <div>
      <h1>Facebook</h1>
      <button onClick={props.logout}>Log Out</button>
    </div>
  );
};

export default NewsFeed;
