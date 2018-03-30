import React from 'react';

const PostContentItem = ({contentUrl, cancel}) => {

  return(
    <div className='contentPreviewContainer'>
      <span className='cancel-content-update' onClick={cancel}><i className="fas fa-times"></i></span>
      <img className='contentPreview' src={contentUrl} />
    </div>
  );
};

export default PostContentItem;
