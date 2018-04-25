import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser, cancelFriendRequest, approveFriendRequest } from '../../actions/user_actions';
import { fetchFriendRequests } from '../../actions/friend_request_actions';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (props) => {
  return {
    currentUser: props.session.currentUser,
    users: props.entities.users,
    pendingFriendRequests: props.entities.friend_requests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(fetchUser(id)),
    requestPendingFriendRequests: (id) => dispatch(fetchFriendRequests(id)),
    logout: () => dispatch(logout()),
    accept: (data) => dispatch(approveFriendRequest(data)),
    reject: (data) => dispatch(cancelFriendRequest(data))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
