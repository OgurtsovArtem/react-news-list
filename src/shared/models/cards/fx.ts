import { createEffect, Effect } from 'effector';
import { getArticles, getNews } from 'shared/api/cards';

/**
 * @remark Типизировать эффект
 */
export const fetchCardsFx: Effect<any, any> = createEffect(getNews);
export const fetchSavedCardsFx: Effect<any, any> = createEffect(getArticles);
