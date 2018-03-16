import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DropDown from '../util/drop_down';
import Moment from 'react-moment';

class PostItem extends React.Component{
  render(){
    const list = {'Public':null, 'Friends':null, 'Friends except...': null};
    const dateToFormat = this.props.post.updated_at;
    return(
      <div className='post-container'>
        <div className='post-item'>
          <div className='post-header'>
            <Link to={`/user/${this.props.post.author_id}`}>
              <img className='post-profile-pic' src={this.props.post.author_profile_pic_url} />
            </Link>
            <div className='post-header-detail'>
              <Link className='author-home-page' to={`/user/${this.props.post.author_id}`} >{this.props.post.author_name}</Link>
              <div className='timeStamp'>
                <Moment interval={120000} fromNow ago>{dateToFormat}</Moment>
                <span className='mid-dot'>  &middot;  </span>
                <DropDown customClass='security-button' list={list} img={window.navPeople} />
              </div>
            </div>
          </div>
          <img className='post-image' src={this.props.post.content_url} />
          <p className='post-body'>{this.props.post.body}</p>
        </div>
        <div className='post-buttons'>
          <button><span>Like</span></button>
          <button><span>Comment</span></button>
          <button><span>Share</span></button>
        </div>
      </div>
    );
  }
}

export default withRouter(PostItem);
