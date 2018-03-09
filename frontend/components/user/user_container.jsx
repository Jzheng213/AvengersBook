import { connect } from 'react-redux';
import User from './user';


const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, null)(User);
