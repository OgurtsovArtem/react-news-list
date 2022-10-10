import style from './style.module.css';
import clsx from 'clsx';
import { Loader } from 'shared/ui/loader';

const Loading = () => {
    return (
        <section className={clsx('continaer', style.loading)}>
            <Loader size={'large'} />
            <h2 className={style.title}>Идет поиск новостей...</h2>
        </section>
    );
};

export default Loading;
