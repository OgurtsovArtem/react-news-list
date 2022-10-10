import { createEffect, Effect } from 'effector';
import { login, registration } from 'shared/api/user';

/**
 * @remark Типизировать еффект
 */
export const fetchRegisterFormFx: Effect<any, any> = createEffect(registration);
export const fetchLoginFormFx: Effect<any, any> = createEffect(login);
