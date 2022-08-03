import clsx from "clsx";
import style from "./Overlay.module.css";

export const Overaly = ({ onClose, className }) => {
  return <div onClick={onClose} className={clsx(className, style.overlay)}></div>;
};
