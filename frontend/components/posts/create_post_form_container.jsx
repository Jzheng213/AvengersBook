import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../../actions/post_actions';
import { togglePostModal } from '../../actions/modal_actions';
import CreatePostForm from './create_post_form';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    postModalFocused: state.ui.modal.postModalFocused,
    ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitPost: (post) => dispatch(createPost(post)),
    fetchPosts: (wallOwnerId) => dispatch(fetchPosts(wallOwnerId)),
    togglePostModal: () => dispatch(togglePostModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);
