import React from 'react';
import { Link } from 'react-router-dom';
import PostContentItem from './post_content_item';
import ErrorModal from '../error_modal';
import ErrorMessage from '../errors/error_message';
class CreatePostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: '',
      content: null,
      contentUrl: null,
      placeholderText: 'What\'s on your mind?',
      postFocused: '',
      postScreen: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.addPicture = this.addPicture.bind(this);
    this.addPostFocused = this.addPostFocused.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    let formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[wall_owner_id]', this.props.wallOwnerId);
    formData.append('post[content]', this.state.content || '');

    this.props.submitPost(formData).then(()=>{
      this.setState({body: '', content: null, contentUrl: null});
      this.props.togglePostModal();
    }, (reason) => {
      this.props.logPostError(reason);
      this.props.toggleErrorModal();
    });
  }


  update(field){
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  addPostFocused(){
    if(!this.props.postModalFocused){
      this.setState({postFocused:'post-focused'});
      this.props.togglePostModal();
    }
  }

  addPicture(e){
    if(parseInt(this.props.match.params.userId) === this.props.currentUser.id){
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({content: file,
          contentUrl: fileReader.result
        });
      };
      if (file) fileReader.readAsDataURL(file);
    }
  }

  cancelUpdate(){
    this.fileInput.value = '';
    this.setState({
      content: null,
      contentUrl: null
    });
  }

  render(){
    let modalPostScreen = this.props.postModalFocused ? 'post-screen-on' : '';
    let errorModalScreen = this.props.errorModal ? 'error-modal-screen' : '';
    let errorBody = '';
    const currentUserId = this.props.currentUser.id;

    if (this.props.postErrMsg[0] === ('Body can\'t be blank'))
      errorBody = 'This post appears to be blank. Please write something or attach a photo to post.';
    return(
      <div className='create-post-shell' onClick={this.addPostFocused}>
        <form className={'create-post'}>
          <div className='create-post-type-container'>
            <span>Make Post</span>
            <span>Photo/Video</span>
            <span>Live Video</span>
            <span>Live Event</span>
          </div>
          <div className='create-post-input-container'>
            <Link to={`/user/${this.props.currentUser.id}`}>
              { this.props.users[currentUserId] &&
                <img className='post-profile-pic' src={this.props.users[currentUserId].profile_pic_url} />
              }
            </Link>
            <textarea className='create-post-input'
              type='text'
              value={this.state.body}
              onChange={this.update('body')}
            />
          </div>
          { this.props.postModalFocused && this.state.contentUrl &&
            <PostContentItem contentUrl={this.state.contentUrl} cancel={this.cancelUpdate}/>
          }

          <div className='create-post-add-container'>
            <label htmlFor='add-post-image'>
              <div className='create-post-add-button'>
                <span>Photo/Video</span>
              </div>
            </label>

            <button className='create-post-add-button'>
              <span>Feeling/Activity</span>
            </button>

            <button className='create-post-add-button'>
              <span>...</span>
            </button>
          </div>
          <div className='create-post-submit-container'>
            <button className='create-post-submit-button' onClick={this.handleSubmit}>Post</button>
          </div>
          <input className='file-input'
            id='add-post-image'
            type='file'
            onChange={this.addPicture}
            ref={(element) => { this.fileInput = element; }}
          />
        </form>

        <div className={modalPostScreen} onClick={this.props.togglePostModal}></div>
        <ErrorModal component={
          <ErrorMessage
            errorHeader={'Post Is Empty'}
            errorBody={errorBody}
            toggleErrorModal={this.props.toggleErrorModal}
          />
        } modalScreen={errorModalScreen}
        />
      </div>
    );
  }
}

export default CreatePostForm;
