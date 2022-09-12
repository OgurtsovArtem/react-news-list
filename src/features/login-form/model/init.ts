import { forward } from "effector";

import { removeError, sendForm, resetForm } from "./events";
import { fetchLoginFormFx } from "./fx";
import {
  $loginForm,
  $isLoginFormLoading,
  $isLoginFormFailed,
  $loginFormFailMessage,
} from "./store";

$loginForm.reset(resetForm).on(fetchLoginFormFx.doneData, (_, res) => res);
$isLoginFormLoading.on(fetchLoginFormFx.pending, (_, isPending) => isPending);
$isLoginFormFailed.on(fetchLoginFormFx.fail, () => true).reset(removeError);
$loginFormFailMessage.on(fetchLoginFormFx.failData, (_, res) => res.message).reset(removeError);

// fetchLoginFormFx.pending.watch((params) => {
//   console.log(params);
// });

forward({
  from: sendForm,
  to: fetchLoginFormFx,
});

forward({
  from: sendForm,
  to: resetForm,
});
