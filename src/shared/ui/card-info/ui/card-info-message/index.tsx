import clsx from "clsx";
import React from "react";
import { FC } from "react";
import style from "./style.module.css";

interface IPropsType {
  className?: string;
  active?: boolean;
}

export const CardInfoMessage: FC<IPropsType> = React.memo(({ className }) => {
  const message = "Войдите, чтобы сохранять статьи";
  return (
    // Кнопка должна редиректить на нужную страницу в зависимости от информации
    <button className={clsx(style.block, className)}>
      <p className={style.message}>{message}</p>
    </button>
  );
});
