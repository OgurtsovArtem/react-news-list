import { menuIsActive } from './events';
import { $isActive } from './store';

$isActive.on(menuIsActive, (_, status) => status);
