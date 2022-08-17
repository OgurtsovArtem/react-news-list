import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { Overaly } from "../../../shared/ui";
import style from "./style.module.css";
import icon from "../../../shared/assets/icons/close.svg";

const Modal = ({ onClose, children }) => {
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

  const modalRoot = useMemo(() => document.getElementById("modal-root"), []);
  return ReactDOM.createPortal(modal, modalRoot);
};

export default Modal;
