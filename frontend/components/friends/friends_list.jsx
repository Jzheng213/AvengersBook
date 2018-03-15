//React
import React from 'react';
//Component
import FriendItem from './friend_item';


const FriendsList = (props) => {
  ;
  return(
    <div className='friends-list-container'>
      <header>
        <span className='friends-icon'>
          <i className="fas fa-users"></i>
        </span>
        <span>Friends &middot; </span>
        <span className='friends-list-count'>{props.friends.length}</span>
      </header>
      <section className='friends-list-section'>
        {
          props.friends.map((friend) => {
            return <FriendItem key={friend.id} friend={friend} />;
          })
        }
      </section>
    </div>
  );
};

export default FriendsList;
