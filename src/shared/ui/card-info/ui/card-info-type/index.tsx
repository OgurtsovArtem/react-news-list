import clsx from 'clsx';
import React from 'react';
import { FC } from 'react';
import style from './style.module.css';

interface IPropsType {
    className?: string;
    text: string;
}

const CardInfoType: FC<IPropsType> = React.memo(({ className, text }) => {
    return (
        <div className={clsx(style.block, className)}>
            <p className={style.tag}>{text}</p>
        </div>
    );
});

export default CardInfoType;
