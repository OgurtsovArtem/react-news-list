import { changeHeaderTheme, changeMainTheme } from './events';
import { $headerTheme, $theme } from './store';

$theme.on(changeMainTheme, (_, theme) => theme);
$headerTheme.on(changeHeaderTheme, (_, theme) => theme);
