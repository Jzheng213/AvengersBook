import React from 'react';
import PostContainer from '../posts/post_container';
const NewsFeed = (props) => {
  return(
    <div className='newsfeed-container'>
      <div className='newsfeed-wrapper'>
        <section className='newsfeed-left-section'>
        </section>
        <section className='newsfeed-mid-section'>
          <PostContainer />
        </section>
        <section className='newsfeed-right-section'>
          
        </section>
      </div>
    </div>
  );
};

export default NewsFeed;
