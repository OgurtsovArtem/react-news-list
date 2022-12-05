import { forward } from 'effector';

import {
    getCards,
    getSavedCards,
    resetCardsData,
    resetCardsError,
    resetSavedCardsData,
    resetSavedCardsError,
} from './events';
import { fetchCardsFx, fetchSavedCardsFx } from './fx';
import {
    $cards,
    $cardsIsLoading,
    $cardsIsFailed,
    $savedCards,
    $savedCardsIsLoading,
    $savedCardsIsFailed,
} from './store';

$cards.on(fetchCardsFx.doneData, (_, res) => res).reset(resetCardsData);
$cardsIsLoading.on(fetchCardsFx.pending, (_, isPending) => isPending);
$cardsIsFailed.on(fetchCardsFx.fail, () => true).reset(resetCardsError);

$savedCards
    .on(fetchSavedCardsFx.doneData, (_, res) => res)
    .reset(resetSavedCardsData);
$savedCardsIsLoading.on(fetchSavedCardsFx.pending, (_, isPending) => isPending);
$savedCardsIsFailed
    .on(fetchSavedCardsFx.fail, () => true)
    .reset(resetSavedCardsError);

forward({
    from: getCards,
    to: fetchCardsFx,
});
forward({
    from: getSavedCards,
    to: fetchSavedCardsFx,
});
