import React from 'react';


const ImagePreview = ({profileImageUrl, cancelUpdate, handleSubmit}) => {

  return (
    <div className='image-preview-form'>
      <header className='image-preview-form-header'>
        Image Preview
      </header>

      <section>
        <img className='profile-image-preview' src={profileImageUrl} />
      </section>

      <footer>
        <button className='button white-button' onClick={cancelUpdate}>Cancel</button>
        <button className='button blue-button' onClick={handleSubmit}>Save</button>
      </footer>
    </div>
  );
};

export default ImagePreview;
