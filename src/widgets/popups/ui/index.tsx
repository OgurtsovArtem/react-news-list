import { useStore } from 'effector-react';
import { Done } from 'features/done';
import React from 'react';
import { FC } from 'react';
import { modelModal } from 'shared/models/modal';
import { AuthPopupForm } from 'widgets/auth-popup-form';
import {
    AUTH_MODAL_ID,
    DONE_LOGIN_MODAL_ID,
    DONE_REGISTR_MODAL_ID,
} from '../lib/names';
import { DONE_LOGIN_MODAL_TITLE, DONE_REGISTR_MODAL_TITLE } from '../lib/texts';

interface PopupsProps {}

const Popups: FC<PopupsProps> = React.memo(() => {
    const currentModal = useStore(modelModal.$modalIsOpen);
    return (
        <>
            {currentModal?.id === AUTH_MODAL_ID && (
                <AuthPopupForm type={'login'} id={AUTH_MODAL_ID} />
            )}
            {currentModal?.id === DONE_REGISTR_MODAL_ID && (
                <Done
                    id={DONE_REGISTR_MODAL_ID}
                    title={DONE_REGISTR_MODAL_TITLE}
                    buttonText={'войти'}
                />
            )}
            {currentModal?.id === DONE_LOGIN_MODAL_ID && (
                <Done id={DONE_LOGIN_MODAL_ID} title={DONE_LOGIN_MODAL_TITLE} />
            )}
        </>
    );
});

export default Popups;
