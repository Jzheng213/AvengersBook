//React
import React from 'react';
//Component
import ImagePreview from './image_preview_form';

const UpdateProfilePicForm = ({profilePicUrl, handleSubmit, cancelUpdate, updateFile}) => {
  return(
    <div>
      <form className='edit-profile-form'>
        <div className='profile-header'>
          <span>Update Profile Picture</span>
        </div>

        {profilePicUrl ?
          <ImagePreview imageUrl={profilePicUrl}
            cancelUpdate={cancelUpdate}
            handleSubmit={handleSubmit}
          /> :
          <label className='profile-body' htmlFor='profile-image-input' >
            <div>
              <i className="fas fa-plus"></i>
              <span className='profile-update-text'>Upload Photo</span>
            </div>
          </label>
        }
        <input id='profile-image-input'
          type='file'
          onChange={updateFile}
        />
      </form>
    </div>
  );
};

export default UpdateProfilePicForm;
