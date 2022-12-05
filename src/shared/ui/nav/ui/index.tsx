import clsx from 'clsx';
import { useStore } from 'effector-react';
import { FC } from 'react';
import { modelHeader } from 'shared/models/header-nav';
import { INavPropsTypes } from '../types';
import style from './style.module.css';

// activeMenu - временное решение!! добавить отдельный store для управления состоянием
const Nav: FC<INavPropsTypes> = ({ children }) => {
    const menuStatus = useStore(modelHeader.$isActive);

    return (
        <nav
            className={clsx({
                [style.navigation]: !menuStatus,
                [style.navigationActive]: menuStatus,
            })}
        >
            <ul className={style.list}>{children}</ul>
        </nav>
    );
};

export default Nav;
