//React
import { connect } from 'react-redux';
//Components
import {
  fetchUser,
  fetchFriends,
  newFriendRequest,
  cancelFriendRequest,
  approveFriendRequest
} from '../../actions/user_actions';

import Profile from './profile';
import { toggleProfPicModal, togglePostModal, toggleEditPostModal } from '../../actions/modal_actions';
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
    postModal: state.ui.modal.postModalFocused,
    editPostModal: state.ui.modal.editPostModal,
    uploadingCover: state.ui.coverPhoto.uploadingCover,
    friends
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(fetchUser(id)),
    toggleProfPicModal: ()=> dispatch(toggleProfPicModal()),
    toggleCreatePostModal: ()=> dispatch(togglePostModal()),
    toggleEditPostModal: ()=> dispatch(toggleEditPostModal()),
    requestFriends: (user)=> dispatch(fetchFriends(user)),
    newFriendRequest: (data) => dispatch(newFriendRequest(data)),
    cancelFriendRequest: (data) => dispatch(cancelFriendRequest(data)),
    approveFriendRequest: (data) => dispatch(approveFriendRequest(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
