import { createStore, Store } from 'effector';

const navLinksDefaultStore = {
    links: [
        {
            id: 1,
            onlyAuth: false,
            path: '/',
            title: 'Главная',
        },
        {
            id: 2,
            onlyAuth: true,
            path: '/profile',
            title: ' Сохранённые статьи',
        },
    ],
};

export const $navLinks: Store<any> = createStore(navLinksDefaultStore);
export const $navLogo: Store<string> = createStore('NewsExplorer');
export const $navButton: Store<string> = createStore('Авторизоваться');
export const $isActive: Store<boolean> = createStore(false);
