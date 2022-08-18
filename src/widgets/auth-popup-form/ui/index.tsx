import { FC, useState } from "react";
import { Modal } from "../../../entities/modal";
import { RegistrationForm } from "../../../features/registration-form";
import { LoginForm } from "../../../features/login-form";
import { Done } from "../../../features/done";
import Form from "../../../entities/form/ui";

interface IAuthPopupFormTypes {
  onClose: () => void;
  type: string;
}

const AuthPopupForm: FC<IAuthPopupFormTypes> = ({ onClose, type }) => {
  const [popup, setPopup] = useState(type);

  const changeLogin = () => setPopup("registration");
  const changeRegistration = () => setPopup("done");
  const changeDone = () => setPopup("login");

  return (
    <Modal onClose={onClose}>
      {popup === "login" && (
        <Form>{(...rest) => <LoginForm formProps={rest} onClick={changeLogin} />}</Form>
      )}
      {popup === "registration" && (
        <Form>
          {(...rest) => <RegistrationForm formProps={rest} onClick={changeRegistration} />}
        </Form>
      )}
      {popup === "done" && <Done onClick={changeDone} />}
    </Modal>
  );
};

export default AuthPopupForm;
