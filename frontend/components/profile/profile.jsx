//React
import React from 'react';
import { withRouter } from 'react-router-dom';
//Component
import PostsContainer from '../posts/post_container';
import CreatePostFormContainer from '../posts/create_post_form_container';
import ProfilePicture from './profile_picture';
import ProfilePictureForm from './update_profile_pic_form';
import Modal from '../modal';
import ProfileHeaderLinks from './profile_header_links';
// import CoverPhoto from './cover_photo';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modal: this.props.modal,
      coverFile: null,
      coverImageUrl: null,
      uploadingCover: false,
      profileFile: null,
      profileImageUrl: null
    };

    this.updateFile = this.updateFile;
    this.cancelUpdate = this.cancelUpdate;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.requestUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.userId !== newProps.match.params.userId){
      this.props.requestUser(newProps.match.params.userId);
      window.scrollTo(0, 0);
    }
    this.setState({ modal: newProps.modal });
  }

  updateFile(field, e){
    if(parseInt(this.props.match.params.userId) === this.props.currentUser.id){
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        if(field === 'cover') this.setState({uploadingCover: !this.state.uploadingCover});

        this.setState({[`${field}File`]: file,
          [`${field}ImageUrl`]: fileReader.result
        });
      };
      if (file) fileReader.readAsDataURL(file);
    }
  }

  cancelUpdate(field){
    this.fileInput.value = '';
    this.setState({
      [`${field}File`]: null,
      [`${field}ImageUrl`]: null
    });
    if(field === 'cover') this.setState({uploadingCover: !this.state.uploadingCover});
  }

  handleSubmit(field){
    let formData = new FormData();
    formData.append(`user[${field}_pic]`, this.state[`${field}File`]);
    formData.append('user[id]', this.props.user.id);
    this.props.saveUserPhoto(formData).then(()=>{
      this.setState({
        [`${field}File`]: null,
        [`${field}ImageUrl`]: null
      });
      if(field === 'cover') this.setState({uploadingCover: !this.state.uploadingCover});
    });
  }

  render(){
    let currentUserPage = this.props.currentUser.id === parseInt(this.props.match.params.userId) ? '' : 'hidden';

    let modalProfPicScreen = '';
    if (this.state.modal) modalProfPicScreen = 'prof-picture-modal-screen';

    let coverUrl = this.state.coverImageUrl || this.props.user.cover_pic_url;

    let hideDuringCoverUpload = '';
    let unhideDuringCoverUpload = 'hidden';
    if (this.state.uploadingCover){
      hideDuringCoverUpload = 'hidden';
      unhideDuringCoverUpload = '';
    }
    
    return(
      <div className='profile-container'>
        <div className= 'profile-wrapper'>
          <Modal component={
            <ProfilePictureForm
              fileInput={this.fileInput}
              profilePicUrl={this.state.profileImageUrl}
              handleSubmit={this.handleSubmit.bind(this, 'profile')}
              cancelUpdate={this.cancelUpdate.bind(this,'profile')}
              updateFile={this.updateFile.bind(this, 'profile')} />}
          modalScreen={modalProfPicScreen}
          />

          <div className='header-container'>
            <div className='cover-picture-container'>
              <img className='cover-picture' src={coverUrl} />
              <div className={`${hideDuringCoverUpload} edit-cover-picture-button`}>
                <div className={`${currentUserPage} cover-image-upload`}>
                  <label htmlFor='cover-image-input'>
                    <i className="fas fa-camera"></i>
                    <span className='cover-update-text'>Update Cover Photo</span>
                  </label>
                  <input id='cover-image-input'
                    type='file'
                    onChange={this.updateFile.bind(this, 'cover')}
                    ref={(element) => { this.fileInput = element; }}
                  />
                </div>
              </div>
            </div>

            <div className={'profile-picture-container'}>
              <ProfilePicture
                currentUser={this.props.currentUser}
                user={this.props.user}
                toggleProfPicModal={this.props.toggleProfPicModal}
                modal={this.props.modal}
              />
            </div>

            <span className='profile-user-name'>{this.props.user.full_name}</span>
            <ProfileHeaderLinks
              hideDuringCoverUpload={hideDuringCoverUpload}
              unhideDuringCoverUpload={unhideDuringCoverUpload}
              cancelUpdate={this.cancelUpdate.bind(this, 'cover')}
              handleSubmit={this.handleSubmit.bind(this, 'cover')}
            />
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
    );
  }
}

export default withRouter(Profile);
