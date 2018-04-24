import React from 'react';
import PostContainer from '../posts/post_container';
import MyInfo from '../my_info/my_info';
import EditPostForm from '../posts/edit_post_form';
import Modal from '../modal';

const NewsFeed = (props) => {
  
  let EditPostScreen = props.editPostModal ? 'edit-post-screen' : '';
  return(
    <div className='newsfeed-container'>
      <Modal component={<EditPostForm post={props.editPost}/>}
        modalScreen={EditPostScreen}
        toggleModal={props.toggleEditPostModal}
      />
      <div className='newsfeed-wrapper'>
        <section className='newsfeed-left-section'>
          <MyInfo />
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
