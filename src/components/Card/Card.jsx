import style from "./Card.module.css";
import trashIcon from "../../assets/icons/trash.svg";
import img from "../../assets/images/web.png";
import clsx from "clsx";
import { useState } from "react";

const Card = ({ type }) => {
  const [card, setCard] = useState(false);
  const auth = false;
  const saved = true;
  const message =
    auth & saved ? "Убрать из сохранённых" : auth ? "Сохранить" : "Войдите, чтобы сохранять статьи";

  const addCard = () => {
    setCard(!card);
  };
  return (
    <div className={style.card}>
      <div className={style.imageBox}>
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
        <img className={style.img} width="400" height="272" src={img} alt="" />
      </div>
      <div className={style.description}>
        <time className={style.date} dateTime="<2 августа, 2019>">
          2 августа, 2019
        </time>
        <h2 className={style.title}>Национальное достояние – парки</h2>
        <p className={style.text}>
          В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться
          система национальных парков – охраняемых территорий, где и сегодня каждый может
          приобщиться к природе.
        </p>
        <a className={style.link} href="http://" target="_blank" rel="noopener noreferrer">
          Лента.ру
        </a>
      </div>
    </div>
  );
};

export default Card;
