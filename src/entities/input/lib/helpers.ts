export const regExpEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const regExpName = /^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z0-9-_.]*$/;
export const regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

export const checkEmail = (value: string): boolean =>
  regExpEmail.test(String(value).toLocaleLowerCase());
export const checkName = (value: string): boolean => regExpName.test(String(value));
export const checkPassword = (value: string): boolean => regExpPassword.test(String(value));
export const checkMinLength = (value: string, limiter: string): boolean => value < limiter;
export const checkMaxLength = (value: string, limiter: string): boolean => value > limiter;
