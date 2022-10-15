import { createEffect, Effect } from 'effector';
import { login, registration } from 'shared/api/user';

/**
 * @remark Типизировать эффект
 */
export const fetchRegisterFormFx: Effect<any, any> = createEffect(registration);
export const fetchLoginFormFx: Effect<any, any> = createEffect(login);
