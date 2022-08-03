import Button from "../../../components/Button/Button";
import { Input } from "../../../entities/input";
import style from "./style.module.css";
import { inputModel } from "../../../entities/input";

const { MIN_NAME_LENGTH, MAX_NAME_LENGTH, MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } = inputModel;

const RegistrationForm = ({ onClick }) => {
  return (
    <>
      <form className={style.form}>
        <legend className={style.legend}>Регистрация</legend>

        <Input type="email" name="Email" placeholder="Введите почту" />
        <Input
          type="password"
          name="Пароль"
          placeholder="Введите пароль"
          minLength={MIN_PASSWORD_LENGTH}
          maxLength={MAX_PASSWORD_LENGTH}
        />
        <Input
          type="name"
          name="Имя"
          placeholder="Введите своё имя"
          minLength={MIN_NAME_LENGTH}
          maxLength={MAX_NAME_LENGTH}
        />
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

export default RegistrationForm;
