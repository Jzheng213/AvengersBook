import React from 'react';
import { connect } from 'react-redux';
import { asFilteredArray } from '../../reducers/posts/selector';
import CommentItem from './comment_item';

const mapStateToProps = (state, ownProps) => {
  const comments = asFilteredArray({obj: state.entities.comments, param: 'post_id' , filter: ownProps.postId});
  return{
    comments,
    currentUser: state.session.currentUser
  };
};

const Comment = (props) => {
  return(
    <div>
      <ul>
        {
          props.comments.map(comment => {
            return <CommentItem comment={comment} key={comment.id}/>;
          })
        }
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, null) (Comment);
