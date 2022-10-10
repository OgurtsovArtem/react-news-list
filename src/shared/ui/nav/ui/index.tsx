import clsx from 'clsx';
import { FC } from 'react';
import { INavPropsTypes } from '../types';
import style from './style.module.css';

// activeMenu - временное решение!! добавить отдельный store для управления состоянием
const Nav: FC<INavPropsTypes> = ({ children, activeMenu }) => {
    return (
        <nav
            className={clsx({
                [style.navigation]: !activeMenu,
                [style.navigationActive]: activeMenu,
            })}
        >
            <ul className={style.list}>{children}</ul>
        </nav>
    );
};

export default Nav;
