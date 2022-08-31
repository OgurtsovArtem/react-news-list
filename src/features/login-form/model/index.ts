import { sendForm } from "./events";
import { $loginForm, $isLoginFormLoading, $isLoginFormFailed } from "./store";

export const modelLogin = {
  $loginForm,
  $isLoginFormLoading,
  $isLoginFormFailed,
  sendForm,
};
