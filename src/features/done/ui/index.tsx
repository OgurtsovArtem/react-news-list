import { Modal } from 'entities/modal';
import { FC, MouseEvent, MouseEventHandler } from 'react';
import { modelModal } from 'shared/models/modal';
import { AUTH_MODAL_ID } from 'widgets/popups/lib/names';
import style from './style.module.css';

interface IDoneModalProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    id: string | number;
    title: string;
    buttonText?: string | number | null;
}

const DoneModal: FC<IDoneModalProps> = ({
    id,
    title,
    buttonText = null,
    onClick,
}) => {
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (typeof onClick === 'function') {
            onClick(event);
        }
        modelModal.closeModal(id);
    };

    return (
        <Modal id={id}>
            <div className={style.container}>
                <legend className={style.title}>{title}</legend>
                {buttonText && (
                    <button
                        className={style.changeFormButton}
                        onClick={onClickHandler}
                        type="button"
                    >
                        {buttonText}
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default DoneModal;
