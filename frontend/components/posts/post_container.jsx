import { connect } from 'react-redux';
import { fetchPost, fetchPosts, fetchFriendsPosts, deletePost } from '../../actions/post_actions';
import { toggleEditPostModal } from '../../actions/modal_actions';
import Post from './post';
import { asArray } from '../../reducers/posts/selector';

const mapStateToProps = (state) => {
  const posts = asArray(state.entities.posts);
  return{
    posts,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPost: (id) => dispatch(fetchPost(id)),
    requestPosts: (wallOwnerId) => dispatch(fetchPosts(wallOwnerId)),
    toggleEditPostModal: (post) => dispatch(toggleEditPostModal(post)),
    requestFriendsPosts: (currentUserId) => dispatch(fetchFriendsPosts(currentUserId)),
    deletePost: (id) => dispatch(deletePost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
