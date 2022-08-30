import clsx from "clsx";
import React from "react";
import { FC } from "react";
import style from "./style.module.css";

interface IPropsType {
  className?: string;
}

export const CardInfoType: FC<IPropsType> = React.memo(({ className }) => {
  return (
    <div className={clsx(style.block, className)}>
      <p className={style.tag}>Природа</p>
    </div>
  );
});
