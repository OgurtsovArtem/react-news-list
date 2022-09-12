import { sendForm, removeError, resetForm } from "./events";
import {
  $loginForm,
  $isLoginFormLoading,
  $isLoginFormFailed,
  $loginFormFailMessage,
} from "./store";

export const modelLogin = {
  $loginForm,
  $isLoginFormLoading,
  $isLoginFormFailed,
  $loginFormFailMessage,
  removeError,
  sendForm,
  resetForm,
};
