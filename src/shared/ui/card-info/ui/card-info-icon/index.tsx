import { FC, useState } from 'react';
import style from './style.module.css';
import { FlagIcon, TrashIcon } from 'shared/ui/icons';
import clsx from 'clsx';
import React from 'react';

interface IPropsType {
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const CardInfoIcon: FC<IPropsType> = React.memo(
    ({ className, onMouseEnter, onMouseLeave }) => {
        const [card, setCard] = useState(true);

        return (
            <div
                className={clsx(style.block, className)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {card ? (
                    <FlagIcon className={style.flag} />
                ) : (
                    <TrashIcon className={style.trash} />
                )}
            </div>
        );
    }
);
