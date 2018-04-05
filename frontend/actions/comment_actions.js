import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};


export const fetchComment = (id) => dispatch => {
  return APIUtil.fetchComment(id).then((comment_from_server) => {
    return dispatch(receiveComment(comment_from_server));
  });
};


export const fetchComments = (ids) => dispatch => {
  return APIUtil.fetchComments(ids).then((comments_from_server) => {
    return dispatch(receiveComments(comments_from_server));
  });
};
