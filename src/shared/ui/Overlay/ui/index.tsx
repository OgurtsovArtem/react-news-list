import clsx from "clsx";
import { FC } from "react";
import style from "./style.module.css";
import { IOverlayProps } from "../types";

const Overaly: FC<IOverlayProps> = ({ onClose, className }) => {
  return <div onClick={onClose} className={clsx(className, style.overlay)}></div>;
};

export default Overaly;
