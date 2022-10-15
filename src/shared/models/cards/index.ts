import {
    getSavedCards,
    resetCardsData,
    resetCardsError,
    resetSavedCardsData,
    resetSavedCardsError,
    getCards,
} from './events';
import {
    $cards,
    $savedCards,
    $cardsIsLoading,
    $cardsIsFailed,
    $savedCardsIsLoading,
    $savedCardsIsFailed,
} from './store';

export const modelCards = {
    $cards,
    $savedCards,
    $cardsIsLoading,
    $cardsIsFailed,
    $savedCardsIsLoading,
    $savedCardsIsFailed,
    getSavedCards,
    resetCardsData,
    resetCardsError,
    resetSavedCardsData,
    resetSavedCardsError,
    getCards,
};
