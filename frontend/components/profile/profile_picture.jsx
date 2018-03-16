import React from 'react';

class ProfilePicture extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      imageFile: null,
      imageUrl: null,
    };
  }

  render(){
    return(
      <div className='profile-picture-root'>
        <img className='profile-picture' src={this.props.user.profile_pic_url} />
        { this.props.currentUser.id === this.props.user.id &&
          <div className='profile-pic-button' onClick={()=> this.props.toggleProfPicModal()}>
            <label className='profile-picture-button-label'>
              <i className="fas fa-camera"></i>
              <p>Update Profile Picture</p>
            </label>
          </div>
        }
      </div>
    );
  }
}

export default ProfilePicture;
