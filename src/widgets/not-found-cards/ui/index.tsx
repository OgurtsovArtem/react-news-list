import style from './style.module.css';
import icon from 'app/assets/icons/not-found.svg';
import clsx from 'clsx';
import { FC } from 'react';
import { INotFoundCardsProps } from '../types';

const NotFoundCards: FC<INotFoundCardsProps> = ({ title, text }) => {
    return (
        <section className={style.NotFoundCards}>
            <div className={clsx('container', style.container)}>
                <img
                    className={style.icon}
                    src={icon}
                    alt="sad"
                    width={96}
                    height={96}
                />
                <h2 className={style.title}>{title}</h2>
                <p className={style.text}>{text}</p>
            </div>
        </section>
    );
};

export default NotFoundCards;
