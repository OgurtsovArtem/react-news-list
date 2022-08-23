import { FC, MouseEventHandler } from "react";
import style from "./style.module.css";

const Done: FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => {
  return (
    <div className={style.container}>
      <legend className={style.title}>Пользователь успешно зарегистрирован!</legend>
      <button className={style.changeFormButton} onClick={onClick} type="button">
        Войти
      </button>
    </div>
  );
};

export default Done;
