import { forward } from "effector";
import { loadUser } from "./events";
import { fetchAuthFx } from "./fx";
import { $isUserLoading, $user } from "./store";

$user.on(fetchAuthFx.doneData, (_, res) => res.data);

$isUserLoading.on(fetchAuthFx.pending, (_, isPending) => isPending);

forward({
  from: loadUser,
  to: fetchAuthFx,
});
