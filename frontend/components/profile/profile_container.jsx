//React
import { connect } from 'react-redux';
//Components
import { fetchUser, saveUserPhoto } from '../../actions/user_actions';
import Profile from './profile';
import { toggleProfPicModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultUser = {email: '', first_name: '', full_name: '', profile_pic_url: '', cover_pic_url: ''};
  return {
    user: state.entities.users[ownProps.match.params.userId] || defaultUser,
    currentUser: state.session.currentUser,
    modal: state.ui.modal.profPicModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserPhoto: (formData) => dispatch(saveUserPhoto(formData)),
    requestUser: (id) => dispatch(fetchUser(id)),
    toggleProfPicModal: ()=> dispatch(toggleProfPicModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
