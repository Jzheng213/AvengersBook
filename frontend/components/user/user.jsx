//React
import React from 'react';
import { withRouter } from 'react-router-dom';
//Component
import PostsContainer from '../posts/post_container';
import CreatePostFormContainer from '../posts/create_post_form_container';
import ProfilePicture from './profile_picture';
// import CoverPhoto from './cover_photo';

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modal: this.props.modal,
      coverFile: null,
      coverImageUrl: null,
      uploadingCover: false,
    };

    this.updateFile = this.updateFile.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
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

  updateFile(e){

    if(parseInt(this.props.match.params.userId) === this.props.currentUser.id){
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({coverFile: file,
          coverImageUrl: fileReader.result,
          uploadingCover: !this.state.uploadingCover});
      };

      if (file) fileReader.readAsDataURL(file);
    }
  }

  cancelUpdate(){
    this.fileInput.value = '';
    this.setState({coverFile: null,
      coverImageUrl: null,
      uploadingCover: !this.state.uploadingCover});
  }

  handleSubmit(){
    let formData = new FormData();
    formData.append('user[cover_pic]', this.state.coverFile);
    formData.append('user[id]', this.props.user.id);
    this.props.saveUserPhoto(formData).then(()=>{
      this.setState({
        coverFile: null,
        coverImageUrl: null,
      })
    });
  }

  render(){
    let currentUserPage = this.props.currentUser.id === parseInt(this.props.match.params.userId) ? '' : 'hidden';

    let modalProfPicScreen = '';
    if (this.state.modal) modalProfPicScreen = 'prof-picture-modal-screen';

    let coverUrl = this.state.coverImageUrl || this.props.user.cover_pic_url

    let hideDuringCoverUpload = '';
    let unhideDuringCoverUpload = 'hidden';
    if (this.state.uploadingCover){
      hideDuringCoverUpload = 'hidden';
      unhideDuringCoverUpload = '';
    }

    return(
      <div className='body-container'>
        <div className={modalProfPicScreen}
          onClick={() => this.props.toggleProfPicModal()}/>
        <div className='user-container'>
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
                    onChange={this.updateFile}
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
            <div className='header-links-container'>
              <span className={`${hideDuringCoverUpload} header-link-list` }>
                <ul>
                  <li><a href='#'>Timeline</a></li>
                  <li><a href='#'>About</a></li>
                  <li><a href='#'>Friends<span className='friends-count'>400</span></a></li>
                  <li><a href='#'>Photos</a></li>
                  <li><a href='#'>More</a></li>
                </ul>
              </span>

              <span className={`${unhideDuringCoverUpload} upload-buttons`}>
                <button className='cover-upload-button cancel' onClick={this.cancelUpdate}>Cancel</button>
                <button className='cover-upload-button submit' onClick={this.handleSubmit}>Save Changes</button>
              </span>
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
