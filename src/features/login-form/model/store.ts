import { createStore, Store } from "effector";

export const $loginForm: Store<null> = createStore(null);
export const $loginFormFailMessage: Store<any> = createStore(null);
export const $isLoginFormLoading: Store<boolean> = createStore(false);
export const $isLoginFormFailed: Store<boolean> = createStore(false);
