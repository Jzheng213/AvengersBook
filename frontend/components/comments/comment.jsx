import React from 'react';
import { connect } from 'react-redux';
import { asFilteredArray } from '../../reducers/posts/selector';
import { createComment } from '../../actions/comment_actions';
import CommentItem from './comment_item';
import CreateCommentForm from './create_comment_form';

const mapStateToProps = (state, ownProps) => {
  const comments = asFilteredArray({obj: state.entities.comments, param: 'post_id' , filter: ownProps.postId});
  return{
    comments,
    currentUser: state.session.currentUser,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    postComment: (comment) => dispatch(createComment(comment))
  };
};

const Comment = (props) => {
  
  return(
    <div className='comment-list'>
      <ul>
        {
          props.comments.map(comment => {
            return <CommentItem comment={comment} users={props.users} key={comment.id}/>;
          })
        }
      </ul>
      <CreateCommentForm postComment={props.postComment} postId={props.postId}/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps) (Comment);
