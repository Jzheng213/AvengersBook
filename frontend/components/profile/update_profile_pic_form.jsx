//React
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//Component
import { saveUserPhoto,fetchUser} from '../../actions/user_actions';
import ImagePreview from './image_preview_form';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    user: ownProps.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserPhoto: (data) => dispatch(saveUserPhoto(data)),
    requestUser: (id) => dispatch(fetchUser(id))
  };
};

class UpdateProfilePicForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      profileFile: null,
      profileImageUrl: null
    };

    this.updateFile = this.updateFile.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFile(e){

    if(parseInt(this.props.match.params.userId) === this.props.currentUser.id){
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({profileFile: file,
          profileImageUrl: fileReader.result
        });
      };
      if (file) fileReader.readAsDataURL(file);
    }
  }

  cancelUpdate(){
    this.fileInput.value = '';
    this.setState({
      profileFile: null,
      profileImageUrl: null
    });
  }

  handleSubmit(){
    let formData = new FormData();
    formData.append('user[profile_pic]', this.state.profileFile);
    formData.append('user[id]', this.props.user.id);
    this.props.saveUserPhoto(formData).then(()=>{
      this.setState({
        profileFile: null,
        profileImageUrl: null
      });
      this.props.requestUser(this.props.user.id);
    });
  }


  render(){
    return(
      <div>
        <form className='edit-profile-form'>
          <div className='profile-header'>
            <span>Update Profile Picture</span>
          </div>

          {this.state.profileImageUrl ?
            <ImagePreview profileImageUrl={this.state.profileImageUrl}
              cancelUpdate={this.cancelUpdate}
              handleSubmit={this.handleSubmit}
            /> :
            <label className='profile-body' htmlFor='profile-image-input' >
              <div>
                <i className="fas fa-plus"></i>
                <span className='profile-update-text'>Upload Photo</span>
              </div>
            </label>
          }
          <input id='profile-image-input'
            type='file'
            onChange={this.updateFile}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateProfilePicForm));
