import clsx from 'clsx';
import { Button } from 'shared/ui/button';
import { Card } from 'features/card';
import Loading from 'widgets/loading/ui';
import { NotFoundCards } from 'widgets/not-found-cards';
import style from './style.module.css';
import { FC } from 'react';

const CardList: FC<{ type?: string }> = ({ type }) => {
    const getMore = () => {
        return;
    };

    const load = false;
    const notFound = false;

    if (load) {
        return <NotFoundCards />;
    }

    if (notFound) {
        return <Loading />;
    }

    return (
        <section className={style.cardList}>
            <div className={clsx('container', style.wrapper)}>
                <h1 className={style.title}>Результаты поиска</h1>
                <div className={style.body}>
                    {new Array(5).fill(0).map((item, index) => (
                        <Card key={index} type={type} />
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

export default CardList;
