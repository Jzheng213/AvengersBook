export const LOG_POST_ERROR = 'LOG_POST_ERROR';


export const logPostError = (err) => {
  return {
    type: LOG_POST_ERROR,
    err
  };
};
