//React
import React from 'react';
import { withRouter } from 'react-router-dom';
//Component
import PostsContainer from '../posts/post_container';
import CreatePostFormContainer from '../posts/create_post_form_container';
import EditPostForm from '../posts/edit_post_form';
import ProfilePicture from './profile_picture';
import ProfilePictureForm from './update_profile_pic_form';
import Modal from '../modal';
import ProfileHeaderLinks from './profile_header_links';
import FriendsList from '../friends/friends_list';
import FriendRequestButton from '../friends/friend_request_button';
import CoverPicture from '../cover_picture/cover_picture';

class Profile extends React.Component{

  componentDidMount(){
    this.props.requestUser(this.props.match.params.userId).then(
      () => {
        window.scrollTo(0, 0);
        return this.props.requestFriends(this.props.user);
      }
    );
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.userId !== newProps.match.params.userId){
      window.scrollTo(0, 0);
      this.props.requestUser(newProps.match.params.userId).then(
        () => this.props.requestFriends(this.props.user)
      );
    }

    this.setState({ modal: newProps.modal });
  }

  render(){
    let modalProfPicScreen = this.props.modal ? 'prof-picture-modal-screen' : '';
    let EditPostScreen = this.props.editPostModal ? 'edit-post-screen' : '';

    let hideDuringCoverUpload = '';
    let unhideDuringCoverUpload = 'hidden';

    if (this.props.uploadingCover){
      hideDuringCoverUpload = 'hidden';
      unhideDuringCoverUpload = '';
    }

    return(
      <div className='profile-container'>
        <div className= 'profile-wrapper'>
          <Modal component={<ProfilePictureForm  user={this.props.user}/>}
            modalScreen={modalProfPicScreen}
            toggleModal={this.props.toggleProfPicModal}
          />
          <Modal component={<EditPostForm post={this.props.editPost}/>}
            modalScreen={EditPostScreen}
            toggleModal={this.props.toggleEditPostModal}
          />

          <div className='header-container'>
            <CoverPicture
              user={this.props.user}
              hideDuringCoverUpload={`${hideDuringCoverUpload}`}
              unhideDuringCoverUpload={`${unhideDuringCoverUpload}`}
            />

            <div className={'profile-picture-container'}>
              <ProfilePicture
                currentUser={this.props.currentUser}
                user={this.props.user}
                toggleProfPicModal={this.props.toggleProfPicModal}
              />
            </div>

            <span className='profile-user-name'>{this.props.user.full_name}</span>

            {
              this.props.currentUser && this.props.user.id &&
              <div className='float-button'>
                <FriendRequestButton
                  currentUser={this.props.currentUser}
                  user={this.props.user}
                  cancelFriendRequest={this.props.cancelFriendRequest}
                  newFriendRequest={this.props.newFriendRequest}
                  approveFriendRequest={this.props.approveFriendRequest}
                />
              </div>
            }

            <ProfileHeaderLinks
              hideDuringCoverUpload={hideDuringCoverUpload}
              unhideDuringCoverUpload={unhideDuringCoverUpload}
              friend_ids={this.props.user.friend_ids}
            />
          </div>

          <div className='user-profile-content'>
            <div className='profile-left-column'>
              <FriendsList friends={this.props.friends}/>
            </div>
            <div className='profile-right-column'>
              <CreatePostFormContainer wallOwnerId={this.props.user.id}/>
              <PostsContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
