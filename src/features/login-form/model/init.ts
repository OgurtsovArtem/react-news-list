import { forward } from "effector";

import { sendForm } from "./events";
import { fetchLoginFormFx } from "./fx";
import { $loginForm, $isLoginFormLoading, $isLoginFormFailed } from "./store";

$loginForm.on(fetchLoginFormFx.doneData, (_, res) => res);
$isLoginFormLoading.on(fetchLoginFormFx.pending, (_, isPending) => isPending);
$isLoginFormFailed.on(fetchLoginFormFx.fail, () => true);

fetchLoginFormFx.watch((params) => {
  console.log("эффект вызван с аргументом", params);
});

forward({
  from: sendForm,
  to: fetchLoginFormFx,
});
