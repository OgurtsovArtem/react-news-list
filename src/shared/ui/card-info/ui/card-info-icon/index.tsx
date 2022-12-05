import { FC, useState } from 'react';
import style from './style.module.css';
import { FlagIcon, TrashIcon } from 'shared/ui/icons';
import clsx from 'clsx';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface IPropsType {
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const CardInfoIcon: FC<IPropsType> = React.memo(
    ({ className, onMouseEnter, onMouseLeave }) => {
        const location = useLocation();
        const profile = location.pathname === '/profile';
        const addCard = () => {
            console.log('add');
        };
        const removeCard = () => {
            console.log('remove');
        };
        const clickController = profile ? removeCard : addCard;
        return (
            <div
                className={clsx(style.block, className)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={clickController}
            >
                {profile ? (
                    <TrashIcon className={style.trash} />
                ) : (
                    <FlagIcon className={style.flag} />
                )}
            </div>
        );
    }
);

export default CardInfoIcon;
