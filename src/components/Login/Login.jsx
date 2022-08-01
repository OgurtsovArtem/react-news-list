import Button from "../Button/Button";
import style from "./Login.module.css";
import { Input } from "../../entities/input";

const Login = ({ onClick }) => {
  return (
    <>
      <form className={style.form}>
        <legend className={style.legend}>Вход</legend>
        <Input type="email" name="Email" placeholder="Введите почту" />
        <Input type="password" name="Пароль" placeholder="Введите пароль" />
        <Button className={style.button} type="submit" color="secondary" disabled={true}>
          Войти
        </Button>
        <div className={style.footer}>
          <span className={style.text}>или</span>
          <button className={style.changeFormButton} onClick={onClick} type="button">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
