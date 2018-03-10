//React
import { connect } from 'react-redux';
//Components
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import User from './user';

const mapStateToProps = (state, ownProps) => {
  const defaultUser = {email: '', first_name: '', full_name: '', profile_pic_url: '', cover_pic_url: ''}
  return {
    user: state.entities.users[ownProps.match.params.userId] || defaultUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
