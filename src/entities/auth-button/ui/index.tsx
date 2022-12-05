import style from './style.module.css';
import { FC } from 'react';
import clsx from 'clsx';
import { modelModal } from 'shared/models/modal';
import { useStore } from 'effector-react';
import { modelAuth } from 'shared/models/auth';
import { IAuthButtonPropsTypes } from '../types';
import { LogoutIcon } from 'shared/ui/icons/ui/logout-icon';
import { AUTH_MODAL_ID, LOGOUT_MODAL_ID } from 'widgets/popups/lib/names';
import { Loader } from 'shared/ui/loader';
import { modelHeader } from 'shared/models/header-nav';

const AuthButton: FC<IAuthButtonPropsTypes> = ({ text }) => {
    const menuStatus = useStore(modelHeader.$isActive);
    const user = useStore(modelAuth.$user);
    const isLoading = useStore(modelAuth.$isUserLoading);
    const openAuthPopup = () => modelModal.openModal(AUTH_MODAL_ID);
    const userLogout = () => modelModal.openModal(LOGOUT_MODAL_ID);
    const className = clsx('button-active-effect', style.button, {
        [style.buttonInverse]: menuStatus,
    });

    return user ? (
        <button className={className} onClick={userLogout}>
            {user.user}
            <LogoutIcon />
        </button>
    ) : (
        <button
            className={className}
            onClick={isLoading ? undefined : openAuthPopup}
        >
            {isLoading ? <Loader size="small" /> : text}
        </button>
    );
};

export default AuthButton;
