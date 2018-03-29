import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../../actions/post_actions';
import { togglePostModal, toggleErrorModal } from '../../actions/modal_actions';
import CreatePostForm from './create_post_form';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    postModalFocused: state.ui.modal.postModalFocused,
    errorModal: state.ui.modal.errorModal,
    ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitPost: (post) => dispatch(createPost(post)),
    fetchPosts: (wallOwnerId) => dispatch(fetchPosts(wallOwnerId)),
    togglePostModal: () => dispatch(togglePostModal()),
    toggleErrorModal: () => dispatch(toggleErrorModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePostForm));
