import { connect } from 'react-redux';
import { fetchPost, fetchPosts, fetchFriendsPosts } from '../../actions/post_actions';
import Post from './post';
import { asArray } from '../../reducers/posts/selector'

const mapStateToProps = (state) => {
  const posts = asArray(state.entities.posts)
  return{
    posts,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPost: (id) => dispatch(fetchPost(id)),
    requestPosts: (wallOwnerId) => dispatch(fetchPosts(wallOwnerId)),
    requestFriendsPosts: (currentUserId) => dispatch(fetchFriendsPosts(currentUserId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
