import React from 'react';
import { Link } from 'react-router-dom';
import PostContentItem from './post_content_item';

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
  }

  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[wall_owner_id]', this.props.wallOwnerId);
    formData.append('post[content]', this.state.content || '');

    this.props.submitPost(formData).then(()=>{
      this.props.fetchPosts(this.props.wallOwnerId);
      this.setState({body: '', content: null, contentUrl: null});
    });
    this.props.togglePostModal();
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

  render(){
    let modalPostScreen = this.props.postModalFocused ? 'post-screen-on' : '';
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
              <img className='post-profile-pic' src={this.props.currentUser.profile_pic_url} />
            </Link>
            <textarea className='create-post-input'
              type='text'
              value={this.state.body}
              onChange={this.update('body')}
            />
          </div>
          { this.props.postModalFocused && this.state.contentUrl &&
            <PostContentItem contentUrl={this.state.contentUrl}/>
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
          <input className='file-input' id='add-post-image' type='file' onChange={this.addPicture} />
        </form>

        <div className={modalPostScreen} onClick={this.props.togglePostModal}></div>
      </div>
    );
  }
}

export default CreatePostForm;
