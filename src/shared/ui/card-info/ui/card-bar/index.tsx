import style from './style.module.css';
import { FC, useState } from 'react';

import clsx from 'clsx';
import CardInfoIcon from '../card-info-icon';
import CardInfoMessage from '../card-info-message';
import CardInfoType from '../card-info-type';

const CardBar: FC<{ data?: string }> = ({ data }) => {
    const [isHover, setHover] = useState(false);
    const mouseEnter = () => setHover(true);
    const mouseLeave = () => setHover(false);

    const messageClass = clsx(style.message, {
        [style.messageActive]: isHover,
    });

    return (
        <div className={style.container}>
            <CardInfoMessage className={messageClass} />
            <CardInfoIcon onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
        </div>
    );
};

export default CardBar;
