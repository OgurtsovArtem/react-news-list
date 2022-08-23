import clsx from "clsx";
import React from "react";
import { FC } from "react";
import style from "./style.module.css";

interface IButtonType {
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  color: string;
  disabled?: boolean;
}

const Button: FC<IButtonType> = React.memo(
  ({ children, onClick, className, type, color, disabled = false }) => {
    const buttonClass = clsx(style.button, className, "button-active-effect", {
      [style.primary]: color === "primary",
      [style.secondary]: color === "secondary",
    });
    return (
      <button
        className={buttonClass}
        type={type ? type : "button"}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export default Button;
