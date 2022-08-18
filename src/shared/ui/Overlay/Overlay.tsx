import clsx from "clsx";
import { FC } from "react";
import style from "./Overlay.module.css";
import { IOverlayProps } from "./types";

export const Overaly: FC<IOverlayProps> = ({ onClose, className }) => {
  return <div onClick={onClose} className={clsx(className, style.overlay)}></div>;
};
