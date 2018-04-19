import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

const receiveComment = (payload) => {
  return {
    type: RECEIVE_COMMENT,
    payload
  };
};

const receiveComments = (payload) => {
  return {
    type: RECEIVE_COMMENTS,
    payload
  };
};


export const fetchComment = (id) => dispatch => {
  return APIUtil.fetchComment(id).then((commentFromServer) => {
    return dispatch(receiveComment(commentFromServer));
  });
};


export const fetchComments = (ids) => dispatch => {
  return APIUtil.fetchComments(ids).then((payload) => {
    return dispatch(receiveComments(payload));
  });
};

export const createComment = (comment) => dispatch => {
  return APIUtil.postComment(comment).then((payload) => {
    return dispatch(receiveComment(payload));
  });
};
