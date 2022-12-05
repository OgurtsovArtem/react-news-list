import style from './style.module.css';
import defaultImg from 'app/assets/images/web.png';
import { FC, SyntheticEvent } from 'react';
import { setFormatDate } from 'shared/utils/date';
import { CardBar, CardInfoType } from 'shared/ui/card-info';

const Card: FC<{ type?: string; data: any }> = ({ type, data }) => {
    const { source, urlToImage, publishedAt, title, description, url } = data;

    const checkImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
        (event.target as HTMLSourceElement).src = defaultImg;
    };

    return (
        <div className={style.card}>
            <div className={style.imageBox}>
                <div className={style.bar}>
                    <CardInfoType text={'Природа'} />
                    <CardBar data={type} />
                </div>
                <img
                    onError={checkImg}
                    className={style.img}
                    width="400"
                    height="272"
                    src={urlToImage ? urlToImage : defaultImg}
                    alt=""
                />
            </div>
            <div className={style.description}>
                <time
                    className={style.date}
                    dateTime={`<${setFormatDate(publishedAt)}>`}
                >
                    {setFormatDate(publishedAt)}
                </time>
                <h2 className={style.title}>{title}</h2>
                <p className={style.text}>
                    {description?.replace(/<\/?[^>]+(>|$)/g, '')}
                </p>
                <a
                    className={style.link}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {source.name}
                </a>
            </div>
        </div>
    );
};

export default Card;
