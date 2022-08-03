import style from "./style.module.css";

const Done = ({ onClick }) => {
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
