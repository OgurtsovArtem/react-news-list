import { createStore } from 'effector';

export const $theme = createStore<string>('light');
export const $headerTheme = createStore<string>('light');
