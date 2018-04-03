import React from 'react';

const ProfileHeaderLinks = ({
  hideDuringCoverUpload,
  friend_ids,
}) => {


  return(
    <div className='header-links-container'>
      <span className={`${hideDuringCoverUpload} header-link-list` }>
      </span>
    </div>

  );
};

export default ProfileHeaderLinks;
