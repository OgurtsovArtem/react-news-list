import { createEffect, Effect } from "effector";
import { login } from "shared/api/user";

/**
 * @remark Типизировать еффект
 */
export const fetchLoginFormFx: Effect<any, any> = createEffect(login);
