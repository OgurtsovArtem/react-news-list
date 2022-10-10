import style from './style.module.css';
import img from 'app/assets/images/web.png';
import { FC } from 'react';
import CardBar from 'entities/card-bar/ui';

const Card: FC<{ type?: string }> = ({ type }) => {
    return (
        <div className={style.card}>
            <div className={style.imageBox}>
                <CardBar data={type} />
                <img
                    className={style.img}
                    width="400"
                    height="272"
                    src={img}
                    alt=""
                />
            </div>
            <div className={style.description}>
                <time className={style.date} dateTime="<2 августа, 2019>">
                    2 августа, 2019
                </time>
                <h2 className={style.title}>Национальное достояние – парки</h2>
                <p className={style.text}>
                    В 2016 году Америка отмечала важный юбилей: сто лет назад
                    здесь начала складываться система национальных парков –
                    охраняемых территорий, где и сегодня каждый может
                    приобщиться к природе.
                </p>
                <a
                    className={style.link}
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Лента.ру
                </a>
            </div>
        </div>
    );
};

export default Card;
