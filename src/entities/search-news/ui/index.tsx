import { useStore } from 'effector-react';
import { modelCards } from 'shared/models/cards';
import { modelSearch } from 'shared/models/search';
import { Button } from 'shared/ui/button';
import style from './style.module.css';

const SearchNews = () => {
    const value = useStore(modelSearch.$searchValue);

    const startSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        modelCards.getCards(value);
    };

    return (
        <form className={style.form} id="search-from" onSubmit={startSearch}>
            <input
                className={style.input}
                type="text"
                placeholder="Введите тему новости"
                maxLength={80}
                value={value ? value : ''}
                onChange={(e) => modelSearch.setValue(e.target.value)}
            />
            <Button className={style.button} color={'primary'} type="submit">
                Искать
            </Button>
        </form>
    );
};

export default SearchNews;
