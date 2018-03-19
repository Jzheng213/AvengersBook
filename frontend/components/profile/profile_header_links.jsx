import React from 'react';

const ProfileHeaderLinks = ({
  hideDuringCoverUpload,
  unhideDuringCoverUpload,
  cancelUpdate,
  handleSubmit,
  friend_ids,
}) => {


  return(
    <div className='header-links-container'>
      <span className={`${hideDuringCoverUpload} header-link-list` }>
      </span>

      <span className={`${unhideDuringCoverUpload} upload-buttons`}>
        <button className='cover-upload-button cancel' onClick={cancelUpdate}>Cancel</button>
        <button className='cover-upload-button submit' onClick={handleSubmit}>Save Changes</button>
      </span>
    </div>

  );
};

export default ProfileHeaderLinks;
