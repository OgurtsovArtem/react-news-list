import { createStore } from 'effector';

export const $user = createStore<any>(null);
export const $isUserLoading = createStore(false);
export const $isUserFailed = createStore(false);
