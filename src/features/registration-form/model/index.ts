import { sendForm, removeError, resetForm } from "./events";
import {
  $registrationForm,
  $isRegistrationFormLoading,
  $isRegistrationFormFailed,
  $registrationFormFailMessage,
} from "./store";

export const modelRegistration = {
  $registrationForm,
  $isRegistrationFormLoading,
  $isRegistrationFormFailed,
  $registrationFormFailMessage,
  sendForm,
  removeError,
  resetForm,
};
