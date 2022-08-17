import Button from "../../../components/Button/Button";
import style from "./style.module.css";
import { Input } from "../../../entities/input";
import { useEffect } from "react";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "../../../entities/input/model";
import { useValidation } from "../../../entities/input/hooks";

const LoginForm = ({ onClick, formProps }) => {
  // Учитывать порядок передачи аргументов. см. компонент Form
  const [handleInputChange, formIsValid, checkValidForm, send] = formProps;
  const password = useValidation();
  const email = useValidation();

  useEffect(() => {
    checkValidForm(password.valid, email.valid);
  }, [password, email, checkValidForm]);

  return (
    <>
      <form className={style.form} name="signin" onSubmit={send}>
        <legend className={style.legend}>Вход</legend>
        <Input
          type="email"
          name="Email"
          placeholder="Введите почту"
          onChange={handleInputChange}
          onInput={(event) => email.onInput(event)}
          error={email.error}
        />
        <Input
          type="password"
          name="Пароль"
          placeholder="Введите пароль"
          minLength={MIN_PASSWORD_LENGTH}
          maxLength={MAX_PASSWORD_LENGTH}
          onChange={handleInputChange}
          onInput={(event) => password.onInput(event)}
          error={password.error}
        />
        <Button className={style.button} type="submit" color="primary" disabled={!formIsValid}>
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

export default LoginForm;
