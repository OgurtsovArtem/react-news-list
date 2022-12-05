import { createStore, Store } from 'effector';

export const $cards: Store<any> = createStore(null);
export const $savedCards: Store<any> = createStore(null);
export const $cardsIsLoading: Store<boolean> = createStore(false);
export const $cardsIsFailed: Store<boolean> = createStore(false);
export const $savedCardsIsLoading: Store<boolean> = createStore(false);
export const $savedCardsIsFailed: Store<boolean> = createStore(false);
