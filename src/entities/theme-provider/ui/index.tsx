import { useStore } from 'effector-react';
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTheme } from '../lib';
import { modelThemeProvider } from '../model';
import { IThemeProviderProps } from '../types';

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const theme = useStore(modelThemeProvider.$theme);
    const themeHeader = useStore(modelThemeProvider.$headerTheme);
    const location = useLocation();

    useEffect(() => {
        const userTheme = getTheme();
        modelThemeProvider.changeMainTheme(userTheme);
    }, []);

    useEffect(() => {
        location.pathname === '/profile'
            ? modelThemeProvider.changeHeaderTheme('light')
            : modelThemeProvider.changeHeaderTheme('dark');
    }, [location]);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.dataset.themeHeader = themeHeader;

        localStorage.setItem('theme', theme);
        localStorage.setItem('theme-header', themeHeader);
    }, [theme, themeHeader]);

    return <>{children}</>;
};

export default ThemeProvider;
