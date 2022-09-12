import { Modal } from "entities/modal";
import { FC, MouseEventHandler } from "react";
import { modelModal } from "shared/modal";
import { AUTH_MODAL_ID } from "widgets/popups/lib/names";
import style from "./style.module.css";

interface IDoneModalProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  id: string | number;
}

const DoneModal: FC<IDoneModalProps> = ({ id }) => {
  const onClick = () => modelModal.openModal(AUTH_MODAL_ID);
  return (
    <Modal id={id}>
      <div className={style.container}>
        <legend className={style.title}>Пользователь успешно зарегистрирован!</legend>
        <button className={style.changeFormButton} onClick={onClick} type="button">
          Войти
        </button>
      </div>
    </Modal>
  );
};

export default DoneModal;
