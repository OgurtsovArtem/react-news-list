import clsx from 'clsx';
import { useStore } from 'effector-react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { modelAuth } from 'shared/models/auth';
import { modelHeader } from 'shared/models/header-nav';
import { INavTabProps } from '../types';
import style from './style.module.css';

const NavTab: FC<INavTabProps> = ({ text, path = '/', onlyAuth }) => {
    const menuStatus = useStore(modelHeader.$isActive);
    const isAuth = useStore(modelAuth.$user);
    const isVisible = onlyAuth ? isAuth : true;

    return isVisible ? (
        <li className={clsx(style.item, { [style.itemInverse]: menuStatus })}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? style.linkActive : style.link
                }
                to={path}
            >
                {text}
            </NavLink>
        </li>
    ) : null;
};

export default NavTab;
