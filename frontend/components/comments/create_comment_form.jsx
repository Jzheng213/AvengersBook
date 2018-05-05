import React from 'react';

class CreateCommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      placeholder: 'Write a comment...'
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e){
    if(e.keyCode === 13){
      this.props.postComment({
        body: this.state.body,
        post_id: this.props.postId
      }).then(
        () => this.setState({body: '', placeholder: 'Write a comment...'})
      );
    }
  }

  render(){
    return (
      <form className='create-comments' onSubmit={(e) => this.handleSubmit(e)}>
        <img className='comment-profile-pic' src={this.props.currentUser.profile_pic_url} />
        <div className='create-comment-body'>
        <textarea className='create-comment-text'
          placeholder={this.state.placeholder}
          type='text'
          value={this.state.body}
          onKeyDown={this.handleSubmit}
          onChange={this.update('body')}
        />
      </div>
      </form>
    );
  }

}

export default CreateCommentForm;
