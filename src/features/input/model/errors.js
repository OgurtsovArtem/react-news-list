import {
  MAX_NAME_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from "./constants";
import { checkEmail, checkName, checkPassword } from "./helpers";
import { errors } from "./messages";

export const errorEmail = (value) => {
  switch (true) {
    case value.length === 0:
      return errors.valueMissing;
    case !checkEmail(value):
      return errors.email.patternMismatch;
    default:
      return "";
  }
};

export const errorName = (value) => {
  switch (true) {
    case value.length === 0:
      return errors.valueMissing;
    case !checkName(value):
      return errors.name.patternMismatch;
    case value.length <= MIN_NAME_LENGTH:
      return errors.name.tooShort;
    case value.length > MAX_NAME_LENGTH:
      return errors.name.tooLong;
    default:
      return "";
  }
};

export const errorPassword = (value) => {
  switch (true) {
    case value.length === 0:
      return errors.valueMissing;
    case !checkPassword(value):
      return errors.password.patternMismatch;
    case value.length < MIN_PASSWORD_LENGTH:
      return errors.password.tooShort;
    case value.length > MAX_PASSWORD_LENGTH:
      return errors.password.tooLong;
    default:
      return "";
  }
};
