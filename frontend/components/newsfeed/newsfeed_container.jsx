import { connect } from 'react-redux';
import NewsFeed from './newsfeed';
import { toggleEditPostModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {

  return {
    editPostModal: state.ui.modal.editPostModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleEditPostModal: ()=> dispatch(toggleEditPostModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
