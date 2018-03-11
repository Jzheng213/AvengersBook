import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import CreatePostForm from './create_post_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitPost: (post) => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);
