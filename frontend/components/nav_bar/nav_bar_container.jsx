import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchFriendRequests } from '../../actions/friend_request_actions';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (props, ownProps) => {
  return {
    currentUser: props.session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(fetchUser(id)),
    requestPendingFriendRequests: (id) => dispatch(fetchFriendRequests(id)),
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
