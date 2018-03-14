import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const FriendItem = ({friend}) => {
  return(
    <Link className='friend-image'
      to={`/user/${friend.id}`}>
      <img src={friend.profile_pic_url} />
      <span>{friend.full_name}</span>
    </Link>
  );
};

export default withRouter(FriendItem);
