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
              <div className='post-header-link'>
                <Link className='author-home-page' to={`/user/${this.props.post.author_id}`} >{this.props.post.author_name}</Link>
                { this.props.post.author_id !== this.props.post.wall_owner_id &&
                  <Link className='author-home-page' to={`/user/${this.props.post.wall_owner_id}`} ><span className='post-left-carot'> &#x25BA; </span>{this.props.post.wall_owner_name}</Link>
                }
              </div>
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
          <button className='post-item-buttons'><i className="far fa-thumbs-up"></i><span>Like</span></button>
          <button className='post-item-buttons'><i className="far fa-comment"></i><span>Comment</span></button>
          <button className='post-item-buttons'><i className="fas fa-share"></i><span>Share</span></button>
        </div>
      </div>
    );
  }
}

export default withRouter(PostItem);
