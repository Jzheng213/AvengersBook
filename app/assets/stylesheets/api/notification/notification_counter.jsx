import React from 'react';

const NotificationCounter = ({currentUser}) => {
  return (
    <span className='notification-counter'>
      {currentUser.friend_request_ids.length}
    </span>
  );
};

export default NotificationCounter;
