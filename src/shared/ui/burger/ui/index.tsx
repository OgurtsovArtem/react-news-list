import clsx from 'clsx';
import { useStore } from 'effector-react';
import { FC, MouseEventHandler } from 'react';
import { modelHeader } from 'shared/models/header-nav';
import style from './style.module.css';

const Burger: FC<{
    onClick: MouseEventHandler<HTMLDivElement>;
}> = ({ onClick }) => {
    const menuStatus = useStore(modelHeader.$isActive);
    return (
        <div
            onClick={onClick}
            className={clsx(style.burger, {
                [style.burgerActive]: menuStatus,
            })}
        ></div>
    );
};

export default Burger;
