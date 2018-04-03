import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editPost } from '../../actions/post_actions';
import { toggleEditPostModal, toggleErrorModal } from '../../actions/modal_actions';
import { logPostError } from '../../actions/error_actions';
import {withRouter} from 'react-router-dom';
import PostContentItem from './post_content_item';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    postModalFocused: state.ui.modal.postModalFocused,
    editPostModal: state.ui.modal.editPostModal,
    postErrMsg: state.errors.post,
    editPost: state.entities.editPost,
    ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitPost: (post) => dispatch(editPost(post)),
    toggleEditPostModal: (post) => dispatch(toggleEditPostModal(post)),
    toggleErrorModal: () => dispatch(toggleErrorModal()),
    logPostError: (err)=> dispatch(logPostError(err))
  };
};


class EditPostForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: null,
      body: '',
      content: null,
      contentUrl: null
    };
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState({
      id: newProps.editPost.id || null,
      body: newProps.editPost.body || '',
      contentUrl: newProps.editPost.content_url || '',
    });
  }
  update(field){
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  cancelUpdate(){
    if(this.fileInput) this.fileInput.value = '';
    this.setState({
      content: null,
      contentUrl: null
    });
  }


  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append('post[id]', this.state.id);
    formData.append('post[body]', this.state.body);
    formData.append('post[wall_owner_id]', this.props.match.params.userId);
    formData.append('post[content]', this.state.content || '');

    this.props.submitPost(formData).then(()=>{
      this.setState({body: '', content: null, contentUrl: null, wallOwnerId: null});
      this.props.toggleEditPostModal();
    }, (reason) => {
      this.props.logPostError(reason);
      this.props.toggleEditPostModal();
    });
  }

  render(){
    return (
      <div className='edit-post-form'>
        <header>Edit Post</header>
        {this.props.editPost.body &&
          <div>
            <Link to={`/user/${this.props.editPost.author_id}`}>
              <img className='post-profile-pic' src={this.props.editPost.author_profile_pic_url} />
            </Link>
            <textarea className='create-post-input'
              type='text'
              value={this.state.body}
              onChange={this.update('body')}
            />
            { this.state.contentUrl &&
              <PostContentItem contentUrl={this.state.contentUrl} cancel={this.cancelUpdate}/>
            }
          </div>
        }
        <footer>
          <button className='button blue-button' onClick={this.handleSubmit}>Save</button>
        </footer>
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostForm));
