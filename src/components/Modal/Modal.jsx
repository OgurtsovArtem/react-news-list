import { useEffect } from "react";
import ReactDOM from "react-dom";
import Overaly from "../Overlay/Overlay";
import style from "./Modal.module.css";
import icon from "../../assets/icons/close.svg";

const Modal = ({ onClose, maxWidth, children }) => {
  useEffect(() => {
    const escape = (event) => (event.code === "Escape" ? onClose() : null);
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [onClose]);

  const modal = (
    <section className={style.modal}>
      <div className={style.content}>
        <button className={style.close} onClick={onClose}>
          <img className={style.icon} src={icon} width="40" height="40" alt="close" />
        </button>
        {children}
      </div>
      <Overaly onClose={onClose} />
    </section>
  );

  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(modal, modalRoot);
};

export default Modal;
