import { setValue } from './events';
import { $searchValue } from './store';

$searchValue.on(setValue, (store: any, value: any) => value);
