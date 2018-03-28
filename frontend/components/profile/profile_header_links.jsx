import React from 'react';

const ProfileHeaderLinks = ({
  hideDuringCoverUpload,
  friend_ids,
}) => {


  return(
    <div className='header-links-container'>
      <span className={`${hideDuringCoverUpload} header-link-list` }>
        <ul>
          <li><a href='#' onClick={(e)=> e.preventDefault()}>Timeline</a></li>
          <li><a href='#' onClick={(e)=> e.preventDefault()}>About</a></li>
          <li><a href='#' onClick={(e)=> e.preventDefault()}>Friends<span className='friends-count'>{friend_ids.length}</span></a></li>
          <li><a href='#' onClick={(e)=> e.preventDefault()}>Photos</a></li>
          <li><a href='#' onClick={(e)=> e.preventDefault()}>More</a></li>
        </ul>
      </span>
    </div>

  );
};

export default ProfileHeaderLinks;
