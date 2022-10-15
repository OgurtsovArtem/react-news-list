import Loading from 'widgets/loading/ui';
import { NotFoundCards } from 'widgets/not-found-cards';
import { useStore } from 'effector-react';
import { modelCards } from 'shared/models/cards';
import { Cards } from 'features/cards';

const CardsMain = () => {
    const data = useStore(modelCards.$cards);
    const loading = useStore(modelCards.$cardsIsLoading);
    // const failed = useStore(modelCards.$cardsIsFailed);

    if (data && !data?.articles.length) {
        return (
            <NotFoundCards
                title="Ничего не найдено"
                text="К сожалению по вашему запросу ничего не найдено."
            />
        );
    }

    if (loading) {
        return <Loading />;
    }

    return data && data?.articles.length > 0 && <Cards />;
};

export default CardsMain;
