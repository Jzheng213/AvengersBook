//React
import { connect } from 'react-redux';
//Components
import { fetchUser, saveUserPhoto, fetchFriends } from '../../actions/user_actions';
import Profile from './profile';
import { toggleProfPicModal } from '../../actions/modal_actions';
import { filterFriends } from '../../reducers/users/selector';

const mapStateToProps = (state, ownProps) => {
  const defaultUser = {
    email: '',
    first_name: '',
    full_name: '',
    profile_pic_url: '',
    cover_pic_url: '',
    friend_ids: []
  };
  let friends = [];
  if (state.entities.users[ownProps.match.params.userId]){
    friends = filterFriends(
      state.entities.users,
      state.entities.users[ownProps.match.params.userId]
    );
  }


  return {
    user: state.entities.users[ownProps.match.params.userId] || defaultUser,
    currentUser: state.session.currentUser,
    modal: state.ui.modal.profPicModal,
    friends
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserPhoto: (formData) => dispatch(saveUserPhoto(formData)),
    requestUser: (id) => dispatch(fetchUser(id)),
    toggleProfPicModal: ()=> dispatch(toggleProfPicModal()),
    requestFriends: (user)=> dispatch(fetchFriends(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
