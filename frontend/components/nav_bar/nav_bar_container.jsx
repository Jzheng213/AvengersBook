import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (props, ownProps) => {
  return {
    currentUser: props.session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(fetchUser(id)),
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
