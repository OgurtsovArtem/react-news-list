import { useState } from "react";
import Done from "../Done/Done";
import Login from "../Login/Login";
import Modal from "../Modal/Modal";
import Registration from "../Registration/Registration";

const UserPopup = ({ onClose, type }) => {
  const [popup, setPopup] = useState(type);

  const changeLogin = () => setPopup("registration");
  const changeRegistration = () => setPopup("login");
  const changeDone = () => setPopup("login");

  return (
    <Modal onClose={onClose}>
      {popup === "login" && <Login onClick={changeLogin} />}
      {popup === "registration" && <Registration onClick={changeRegistration} />}
      {popup === "done" && <Done onClick={changeDone} />}
    </Modal>
  );
};

export default UserPopup;
