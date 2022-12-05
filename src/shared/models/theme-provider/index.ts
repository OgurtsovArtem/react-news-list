import { changeHeaderTheme, changeMainTheme } from './events';
import { $headerTheme, $theme } from './store';

export const modelThemeProvider = {
    $theme,
    $headerTheme,
    changeHeaderTheme,
    changeMainTheme,
};
