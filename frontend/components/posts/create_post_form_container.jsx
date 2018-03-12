import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../../actions/post_actions';
import CreatePostForm from './create_post_form';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitPost: (post) => dispatch(createPost(post)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);
