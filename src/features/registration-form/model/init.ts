import { forward } from "effector";

import { removeError, sendForm, resetForm } from "./events";
import { fetchRegistrationFormFx } from "./fx";
import {
  $registrationForm,
  $isRegistrationFormLoading,
  $isRegistrationFormFailed,
  $registrationFormFailMessage,
} from "./store";

$registrationForm.reset(resetForm).on(fetchRegistrationFormFx.doneData, (_, res) => res.data);
$isRegistrationFormLoading.on(fetchRegistrationFormFx.pending, (_, isPending) => isPending);
$isRegistrationFormFailed.on(fetchRegistrationFormFx.fail, () => true).reset(removeError);
$registrationFormFailMessage
  .on(fetchRegistrationFormFx.failData, (_, res) => res.message)
  .reset(removeError);

fetchRegistrationFormFx.watch((params) => {
  console.log("эффект вызван с аргументом", params);
});
$registrationForm.watch(() => {});

forward({
  from: sendForm,
  to: fetchRegistrationFormFx,
});
