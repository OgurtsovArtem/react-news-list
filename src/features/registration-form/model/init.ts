import { forward } from "effector";

import { sendForm } from "./events";
import { fetchRegistrationFormFx } from "./fx";
import { $registrationForm, $isRegistrationFormLoading, $isRegistrationFormFailed } from "./store";

$registrationForm.on(fetchRegistrationFormFx.doneData, (_, res) => res.data);
$isRegistrationFormLoading.on(fetchRegistrationFormFx.pending, (_, isPending) => isPending);
$isRegistrationFormFailed.on(fetchRegistrationFormFx.fail, () => true);

fetchRegistrationFormFx.watch((params) => {
  console.log("эффект вызван с аргументом", params);
});

forward({
  from: sendForm,
  to: fetchRegistrationFormFx,
});
