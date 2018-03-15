import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NewsFeed from './newsfeed';


const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout
  };
};

export default connect(mapStateToProps, null)(NewsFeed);
