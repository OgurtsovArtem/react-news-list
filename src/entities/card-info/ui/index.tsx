import style from "./style.module.css";
import trashIcon from "app/assets/icons/trash.svg";
import clsx from "clsx";
import { FC, useState } from "react";

const CardInfo: FC<{ type?: string }> = ({ type }) => {
  const [card, setCard] = useState(false);
  const auth = false;
  const saved = true;
  const message =
    auth && saved
      ? "Убрать из сохранённых"
      : auth
      ? "Сохранить"
      : "Войдите, чтобы сохранять статьи";

  const addCard = () => {
    setCard(!card);
  };
  return (
    <div className={style.info}>
      <span className={style.block}>
        <p className={style.tag}>Природа</p>
      </span>
      <div className={style.interaction}>
        <button className={clsx(style.block, style.blockMessage)} onClick={addCard}>
          <p className={style.message}>{message}</p>
        </button>
        <button className={style.blockButton} onClick={addCard}>
          {type !== "profile" ? (
            <svg
              className={clsx(style.icon, {
                [style.iconActive]: card,
              })}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3822 15.7137L6 19.9425V4L18 4V19.9425L12.6178 15.7137L12 15.2283L11.3822 15.7137Z"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <img className={style.icon} width="24" height="24" src={trashIcon} alt="trash" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
