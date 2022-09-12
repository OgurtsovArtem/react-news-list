import { FC, useState } from "react";
import { Modal } from "../../../entities/modal";
import { RegistrationForm } from "../../../features/registration-form";
import { LoginForm } from "../../../features/login-form";
import { Done } from "../../../features/done";
import React from "react";

interface IAuthPopupFormTypes {
  onClose?: () => void;
  type: string;
  id: string | number;
}

const AuthModal: FC<IAuthPopupFormTypes> = React.memo(({ onClose, type, id }) => {
  const [popup, setPopup] = useState(type);

  const changeToRegistration = () => setPopup("registration");
  const changeToLogin = () => setPopup("login");

  return (
    <Modal onClose={onClose} id={id}>
      {popup === "login" && <LoginForm onClick={changeToRegistration} />}
      {popup === "registration" && <RegistrationForm onClick={changeToLogin} />}
    </Modal>
  );
});

export default AuthModal;
