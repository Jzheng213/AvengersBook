import React from 'react';

const ProfilePicture = ({user, currentUser, toggleProfPicModal}) => {

  return(
    <div className='profile-picture-root'>
      <img className='profile-picture' src={user.profile_pic_url} />
      { currentUser.id === user.id &&
        <div className='profile-pic-button' onClick={()=> toggleProfPicModal()}>
          <label className='profile-picture-button-label'>
            <i className="fas fa-camera"></i>
            <p>Update Profile Picture</p>
          </label>
        </div>
      }
    </div>
  );
};

export default ProfilePicture;
