export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/user/${id}`
  });
};
