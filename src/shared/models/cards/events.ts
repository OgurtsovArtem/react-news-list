import { createEvent } from 'effector';

export const getSavedCards = createEvent();

export const resetCardsData = createEvent();
export const resetCardsError = createEvent();
export const resetSavedCardsData = createEvent();
export const resetSavedCardsError = createEvent();
export const getCards = createEvent<any>();
export const addCard = createEvent();
export const removeCard = createEvent();
