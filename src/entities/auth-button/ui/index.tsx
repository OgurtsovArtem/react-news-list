import style from './style.module.css';
import { FC } from 'react';
import clsx from 'clsx';
import { modelModal } from 'shared/models/modal';
import { useStore } from 'effector-react';
import { modelAuth } from 'shared/models/auth';
import { IAuthButtonPropsTypes } from '../types';
import { LogoutIcon } from 'shared/ui/icons/ui/logout-icon';
import { AUTH_MODAL_ID, LOGOUT_MODAL_ID } from 'widgets/popups/lib/names';

const AuthButton: FC<IAuthButtonPropsTypes> = ({ text }) => {
    const user = useStore(modelAuth.$user);
    const openAuthPopup = () => modelModal.openModal(AUTH_MODAL_ID);
    const userLogout = () => {
        modelModal.openModal(LOGOUT_MODAL_ID);
    };

    return user ? (
        <button
            className={clsx('button-active-effect', style.button)}
            onClick={userLogout}
        >
            {user.user}
            <LogoutIcon />
        </button>
    ) : (
        <button
            className={clsx('button-active-effect', style.button)}
            onClick={openAuthPopup}
        >
            {text}
        </button>
    );
};

export default AuthButton;
