import React from 'react';

const MyInfo = () => {
  return(
    <div className='my-info'>
      <header>Contact Jack Zheng</header>
      <a href={'https://www.linkedin.com/in/jackzheng1/'}><span id='linked-in'><i className="fab fa-linkedin"></i></span><span>LinkedIn</span></a>
      <a href={'jzheng213@gmail.com'}><span id='gmail'><i className="far fa-envelope"></i></span><span>Gmail</span></a>
      <a href={'https://github.com/jzheng213'}><span id='github'><i className="fab fa-github-alt"></i></span><span>GitHub</span></a>
    </div>
  );
};

export default MyInfo;
