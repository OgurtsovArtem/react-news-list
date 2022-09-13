import { sendLoginForm, sendRegistrForm, removeError, resetData } from "./events";
import { $authFormData, $authFormFailMessage, $authFormFailed, $authFormLoading } from "./store";

export const modelAuth = {
  $authFormData,
  $authFormFailMessage,
  $authFormFailed,
  $authFormLoading,
  sendLoginForm,
  sendRegistrForm,
  removeError,
  resetData,
};
