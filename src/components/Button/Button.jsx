import clsx from "clsx";
import style from "./Button.module.css";

const Button = ({ children, onClick, className, type, color, disabled = false }) => {
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
};

export default Button;
