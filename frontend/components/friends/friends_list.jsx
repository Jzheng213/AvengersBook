//React
import React from 'react';
//Component
import FriendItem from './friend_item';


const FriendsList = ({friends}) => {
  return(
    <div className='friends-list-container'>
      <header>
        <span className='friends-icon'>
          <i className="fas fa-users"></i>
        </span>
        <span>Friends &middot; </span>
        <span className='friends-list-count'>{friends.length}</span>
      </header>
      <section className='friends-list-section'>
        {
          friends.map((friend) => {
            return <FriendItem key={friend.id} friend={friend} />;
          })
        }
      </section>
    </div>
  );
};

export default FriendsList;
