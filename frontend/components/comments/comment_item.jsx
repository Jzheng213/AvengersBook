import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const CommentItem = ({comment}) => {
  const dateToFormat = comment.updated_at;
  return(
    <div className='comment-container'>
      <Link to={`/user/${comment.author_id}`}>
        <img className='comment-profile-pic' src={comment.author_profile_pic_url} />
      </Link>
      <div className='comment-body'>
        <Link className='comment-author' to={`/user/${comment.author_id}`}>
          {comment.author_name}
        </Link>
        {comment.body}
      </div>
      <button className='comment-like'>Like</button>
      <button className='comment-reply'>Reply</button>
      <Moment interval={120000} fromNow ago>{dateToFormat}</Moment>
    </div>
  );
};

export default CommentItem;
