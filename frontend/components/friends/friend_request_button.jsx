import React from 'react';
import DropDown from '../util/drop_down';
import { withRouter } from 'react-router-dom';

const SELF = 'SELF';
const FRIENDS = 'FRIENDS';
const PENDING_FRIENDS = 'PENDING_FRIENDS';
const NOT_FRIENDS = 'NOT_FRIENDS';
const AWAITING_FRIENDS = 'AWAITING_FRIENDS';

const FriendRequestButton = (
  {
    currentUser,
    user,
    newFriendRequest,
    cancelFriendRequest,
    approveFriendRequest
  }
) => {
  let relationship;
  let button;

  if (currentUser.id === user.id) relationship = SELF;

  if (user.friend_ids.includes(currentUser.id) ||
    currentUser.friend_ids.includes(user.id)) relationship = FRIENDS;

  if (currentUser.friend_request_ids.includes(user.id)) relationship = AWAITING_FRIENDS;

  if (user.friend_request_ids.includes(currentUser.id)) relationship = PENDING_FRIENDS;

  if (!relationship) relationship = NOT_FRIENDS;

  let requestPair = {requestor_id: currentUser.id, receiver_id: user.id, request:true};
  let receivePair = {requestor_id: user.id, receiver_id: currentUser.id, request:false};

  let friendContent = <span><i className="fas fa-check"></i> Friends &#9660;</span>;
  let requestSentContent = <span><i className="fas fa-user-plus"></i> Friend Request Sent &#9660;</span>;
  let respondContent = <span><i className="fas fa-check-circle"></i> Respond to Friend Request &#9660;</span>;

  switch (relationship) {
  case SELF:
    return <div></div>;
  case FRIENDS:
    return (
      <DropDown customClass={'f-btn friended-btn'}
        key={'h1'}
        content={friendContent}
        list={{'unfriend': () => cancelFriendRequest(requestPair)}}
      / >
    );
  case PENDING_FRIENDS:
    return (
      <DropDown customClass={'f-btn pending-friends-btn'}
        key={'h2'}
        content={requestSentContent}
        list={{'cancel request': ()=> cancelFriendRequest(requestPair)}}
      />
    );
  case NOT_FRIENDS:
    return (
      <button className={'f-btn not-friend-btn'}
        onClick={()=>newFriendRequest(requestPair)}
      ><i className="fas fa-user-plus"></i>
      Add Friend</button>
    );
  case AWAITING_FRIENDS:
    return (
      <DropDown customClass={'f-btn awaiting-friends-btn'}
        key={'h3'}
        content={respondContent}
        list={{
          'confirm': () => approveFriendRequest(receivePair),
          'delete request': () => cancelFriendRequest(receivePair)
        }}
      />
    );
  default:
    return <div></div>;
  }
};

export default withRouter(FriendRequestButton);
//
