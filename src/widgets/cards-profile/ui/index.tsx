import Loading from 'widgets/loading/ui';
import { NotFoundCards } from 'widgets/not-found-cards';
import { useStore } from 'effector-react';
import { modelCards } from 'shared/models/cards';
import { Cards } from 'features/cards';
import { useEffect } from 'react';

const CardsProfile = () => {
    const data = useStore(modelCards.$savedCards);
    const loading = useStore(modelCards.$savedCardsIsLoading);
    const failed = useStore(modelCards.$savedCardsIsFailed);
    console.log(!data?.articles.length, !data);
    useEffect(() => {
        modelCards.getSavedCards();
    }, []);

    if (data && !data?.articles.length) {
        return (
            <NotFoundCards
                title="Ничего не найдено"
                text="Вы не сохранили ни одной статьи."
            />
        );
    }

    if (failed) {
        return (
            <NotFoundCards
                title="Ошибка подключения"
                text="Что то пошло не так попробуйте обновить страницу."
            />
        );
    }

    if (loading) {
        return <Loading />;
    }

    return data && data?.articles.length > 0 && <Cards />;
};

export default CardsProfile;
