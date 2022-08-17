export const regExpEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const regExpName = /^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z0-9-_.]*$/;
export const regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

export const checkEmail = (value) => regExpEmail.test(String(value).toLocaleLowerCase());
export const checkName = (value) => regExpName.test(String(value));
export const checkPassword = (value) => regExpPassword.test(String(value));
export const checkMinLength = (value, limiter) => value < limiter;
export const checkMaxLength = (value, limiter) => value > limiter;
