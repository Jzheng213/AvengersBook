import React from 'react';

const PostContentItem = ({contentUrl}) => {

  return(
    <div className='contentPreviewContainer'>
      <img className='contentPreview' src={contentUrl} />
    </div>
  );
};

export default PostContentItem;
