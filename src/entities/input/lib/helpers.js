export const checkEmail = (value) => {
  const regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regExp.test(String(value).toLocaleLowerCase());
};
export const checkName = (value) => {
  const regExp = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
  return regExp.test(String(value).toLocaleLowerCase());
};
export const checkPassword = (value) => {
  const regExp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  return regExp.test(String(value).toLocaleLowerCase());
};
