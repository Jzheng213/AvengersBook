import React from 'react';
import { Link } from 'react-router-dom';

class CreatePostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: '',
      content: '',
      placeholderText: 'What\'s on your mind?'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.addPicture = this.addPicture.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const post = {
      body: this.state.body,
      wall_owner_id: this.props.wallOwnerId,
      content: this.state.content
    };

    this.props.submitPost(post).then(()=>{
      this.props.fetchPosts(this.props.wallOwnerId);
      this.setState({body: '', content: ''});
    });
  }

  update(field){
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  addPicture(){
    
  }

  render(){
    return(
      <form className='create-post'>
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
        <div className='create-post-add-container'>
          <button className='create-post-add-button' onClick={this.addPicture()}>
            <span>Photo/Video</span>
          </button>

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
      </form>
    );
  }
}

export default CreatePostForm;
