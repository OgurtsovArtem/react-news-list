import { createEffect } from "effector";
import { getUser } from "shared/api/user";

export const fetchAuthFx = createEffect(getUser);
