import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = (props) => {
  return {
    currentUser: props.session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
