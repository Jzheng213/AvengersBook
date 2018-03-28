import React from 'react';
import { saveUserPhoto,fetchUser} from '../../actions/user_actions';
import { toggleUploadPhoto } from '../../actions/cover_load_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps =(state, ownProps)=> {
  return {
    state,
    user: ownProps.user,
    currentUser: state.session.currentUser,
    cover_updating: state.ui.coverPhoto.uploadingCover
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserPhoto: (formData) => dispatch(saveUserPhoto(formData)),
    requestUser: (id) => dispatch(fetchUser(id)),
    toggleUploadUploadPhoto: ()=> dispatch(toggleUploadPhoto())
  };
};

class CoverPicture extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      coverFile: null,
      coverImageUrl: null,
    };

    this.updateFile = this.updateFile;
    this.cancelUpdate = this.cancelUpdate;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateFile(field, e){
    if(parseInt(this.props.match.params.userId) === this.props.currentUser.id){
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        if(field === 'cover') this.props.toggleUploadUploadPhoto();
        debugger;
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
    if(field === 'cover') this.props.toggleUploadUploadPhoto();
  }

  handleSubmit(field){
    let formData = new FormData();
    formData.append(`user[${field}_pic]`, this.state[`${field}File`]);
    formData.append('user[id]', this.props.user.id);
    debugger;
    this.props.saveUserPhoto(formData).then(()=>{
      this.setState({
        [`${field}File`]: null,
        [`${field}ImageUrl`]: null
      });
      if(field === 'cover') this.props.toggleUploadUploadPhoto();
      this.props.requestUser(this.props.user.id);
    });
  }

  render(){
    let currentUserPage = this.props.currentUser.id === parseInt(this.props.match.params.userId) ? '' : 'hidden';
    let coverUrl = this.state.coverImageUrl || this.props.user.cover_pic_url;

    let unhideDuringCoverUpload =  this.props.cover_updating ? '' : 'hidden';
    return(
      <div className='cover-picture-container'>
        <img className='cover-picture' src={coverUrl} />
        <div className={`${this.props.hideDuringCoverUpload} edit-cover-picture-button`}>
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
        <div className={`${unhideDuringCoverUpload} upload-buttons`}>
          <button className='cover-upload-button cancel' onClick={this.cancelUpdate.bind(this, 'cover')}>Cancel</button>
          <button className='cover-upload-button submit' onClick={this.handleSubmit.bind(this, 'cover')}>Save Changes</button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoverPicture));
