import style from './style.module.css';
import icon from 'app/assets/icons/not-found.svg';
import clsx from 'clsx';

const NotFoundCards = () => {
    return (
        <section className={clsx('container', style.NotFoundCards)}>
            <img className={style.icon} src={icon} alt="sad" />
            <h2 className={style.title}>Ничего не найдено</h2>
            <p className={style.text}>
                К сожалению по вашему запросу ничего не найдено.
            </p>
        </section>
    );
};

export default NotFoundCards;
