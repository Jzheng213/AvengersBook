import React from 'react';

class CreateCommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ''
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
    e.preventDefault();
    this.props.postComment({
      body: this.state.body,
      post_id: this.props.postId
    }).then(
      this.setState({body: ''})
    );

  }

  render(){
    return (
      <div>
        <form>
          <textarea className='create-create-input'
            type='text'
            value={this.state.body}
            onChange={this.update('body')}
          />
          <button onClick={this.handleSubmit}>Upload</button>
        </form>
      </div>
    );
  }

}

export default CreateCommentForm;
