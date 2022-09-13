import { createStore, Store } from "effector";

export const $authFormData: Store<null> = createStore(null);
export const $authFormFailMessage: Store<any> = createStore(null);
export const $authFormLoading: Store<boolean> = createStore(false);
export const $authFormFailed: Store<boolean> = createStore(false);
