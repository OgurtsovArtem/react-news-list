import { sendForm } from "./events";
import { $registrationForm, $isRegistrationFormLoading, $isRegistrationFormFailed } from "./store";

export const modelRegistration = {
  $registrationForm,
  $isRegistrationFormLoading,
  $isRegistrationFormFailed,
  sendForm,
};
