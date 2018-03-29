export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users'
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const updateUser = formData => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${formData.get("user[id]")}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
