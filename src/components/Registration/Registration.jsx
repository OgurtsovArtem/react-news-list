import Button from "../Button/Button";
import Input from "../Input/Input";
import style from "./Registration.module.css";

const Registration = ({ onClick }) => {
  return (
    <>
      <form className={style.form}>
        <legend className={style.legend}>Регистрация</legend>

        <Input type="email" name="Email" placeholder="Введите почту" />
        <Input type="password" name="Пароль" placeholder="Введите пароль" />
        <Input type="name" name="Имя" placeholder="Введите своё имя" />
        <Button className={style.button} type="submit" color="secondary" disabled={true}>
          Войти
        </Button>
        <div className={style.footer}>
          <span className={style.text}>или</span>
          <button className={style.changeFormButton} onClick={onClick}>
            Войти
          </button>
        </div>
      </form>
    </>
  );
};

export default Registration;
