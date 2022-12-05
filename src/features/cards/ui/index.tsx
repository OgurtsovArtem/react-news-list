import clsx from 'clsx';
import { Card } from 'entities/card';
import style from './style.module.css';
import { Button } from 'shared/ui/button';
import { useStore } from 'effector-react';
import { modelCards } from 'shared/models/cards';

const Cards = () => {
    const data = useStore(modelCards.$cards);
    // const loading = useStore(modelCards.$cardsIsLoading);
    // const failed = useStore(modelCards.$cardsIsFailed);
    const getMore = () => {
        return;
    };

    return (
        <section className={style.cardList}>
            <div className={clsx('container', style.wrapper)}>
                <h1 className={style.title}>Результаты поиска</h1>
                <div className={style.body}>
                    {data?.articles &&
                        data.articles.map((data: any, index: number) => (
                            <Card key={index} data={data} />
                        ))}
                </div>
                <div className={style.footer}>
                    <Button
                        className={style.button}
                        onClick={getMore}
                        color={'secondary'}
                    >
                        Показать еще
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Cards;
