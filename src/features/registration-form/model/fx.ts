import { createEffect, Effect } from "effector";
import { registration } from "shared/api/user";

/**
 * @remark Типизировать еффект
 */
export const fetchRegistrationFormFx: Effect<any, any> = createEffect(registration);
