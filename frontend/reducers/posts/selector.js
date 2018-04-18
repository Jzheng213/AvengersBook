export const asArray = (obj) => {
  const objArr = Object.keys(obj).map(key => obj[key]);
  return objArr.reverse();
};

export const asFilteredArray = ({obj, param, filter}) => {
  const objArr = Object.keys(obj).map(key => obj[key]);
  return objArr.filter(obj => obj[param] == filter);
};
