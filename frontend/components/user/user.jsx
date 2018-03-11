//React
import React from 'react';
import { withRouter } from 'react-router-dom';
//Component
import PostsContainer from '../posts/post_container';
import CreatePostFormContainer from '../posts/create_post_form_container';

class User extends React.Component{
  componentDidMount(){
    this.props.requestUser(this.props.match.params.userId);
  }

  render(){
    return(
      <div className='body-container'>
        <div className='user-container'>
          <div className='header-container'>
            <div className='cover-picture-container'>
              <img className='cover-picture' src={this.props.user.cover_pic_url} />
            </div>
            <div className='profile-picture-container'>
              <img className='profile-picture' src={this.props.user.profile_pic_url} />
            </div>
            <span className='profile-user-name'>{this.props.user.full_name}</span>
            <div className='header-links-container'>
              <ul>
                <li><a href='#'>Timeline</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Friends<span className='friends-count'>400</span></a></li>
                <li><a href='#'>Photos</a></li>
                <li><a href='#'>More</a></li>
              </ul>
            </div>
            <div className='user-profile-content'>
              <div className='profile-left-column'>

              </div>
              <div className='profile-right-column'>
                <CreatePostFormContainer wallOwnerId={this.props.user.id}/>
                <PostsContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(User);
