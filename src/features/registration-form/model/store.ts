import { createStore, Store } from "effector";

export const $registrationForm: Store<null> = createStore(null);
export const $isRegistrationFormLoading: Store<boolean> = createStore(false);
export const $isRegistrationFormFailed: Store<boolean> = createStore(false);
