import { createStore } from "effector";

export const $user = createStore(null);
export const $isUserLoading = createStore(false);
export const $isUserFailde = createStore(false);
