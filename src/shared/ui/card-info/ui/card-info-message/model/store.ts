import { createStore } from 'effector';

export const $messageState = createStore({
    notAuth: 'Войдите, чтобы сохранять статьи',
    save: 'Сохранить',
    remove: 'Убрать из сохранённых',
});
