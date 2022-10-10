import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { INavTabProps } from '../types';
import style from './style.module.css';

const NavTab: FC<INavTabProps> = ({ text, path = '/', isVisible = true }) => {
    return isVisible ? (
        <li className={style.item}>
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
