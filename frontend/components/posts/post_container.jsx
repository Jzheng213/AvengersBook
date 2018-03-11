import { connect } from 'react-redux';
import { fetchPost, fetchPosts } from '../../actions/post_actions';
import Post from './Post';
import { asArray } from '../../reducers/posts/selector'

const mapStateToProps = (state) => {
  const posts = asArray(state.entities.posts)
  return{
    posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPost: (id) => dispatch(fetchPost(id)),
    requestPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
