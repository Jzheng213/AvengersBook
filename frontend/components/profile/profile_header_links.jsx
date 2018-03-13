import React from 'react';

const ProfileHeaderLinks = ({
  hideDuringCoverUpload,
  unhideDuringCoverUpload,
  cancelUpdate,
  handleSubmit
}) => {
  return(
    <div className='header-links-container'>
      <span className={`${hideDuringCoverUpload} header-link-list` }>
        <ul>
          <li><a href='#'>Timeline</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Friends<span className='friends-count'>400</span></a></li>
          <li><a href='#'>Photos</a></li>
          <li><a href='#'>More</a></li>
        </ul>
      </span>

      <span className={`${unhideDuringCoverUpload} upload-buttons`}>
        <button className='cover-upload-button cancel' onClick={cancelUpdate}>Cancel</button>
        <button className='cover-upload-button submit' onClick={handleSubmit}>Save Changes</button>
      </span>
    </div>
  );
};

export default ProfileHeaderLinks;
