import clsx from 'clsx';
import { useStore } from 'effector-react';
import React from 'react';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { modelAuth } from 'shared/models/auth';
import style from './style.module.css';

interface IPropsType {
    className?: string;
    active?: boolean;
}
const messages = {
    notAuth: 'Войдите, чтобы сохранять статьи',
    save: 'Нажмите чтобы сохранить',
    remove: 'Убрать из сохранённых',
};

const CardInfoMessage: FC<IPropsType> = React.memo(({ className }) => {
    const isAuth = useStore(modelAuth.$user);
    const location = useLocation();
    const profile = location.pathname === '/profile';

    const message = () => {
        if (isAuth) {
            if (profile) return messages.remove;
            return messages.save;
        }
        return messages.notAuth;
    };
    return (
        // Кнопка должна редиректить на нужную страницу в зависимости от информации
        <button className={clsx(style.block, className)}>
            <p className={style.message}>{message()}</p>
        </button>
    );
});

export default CardInfoMessage;
