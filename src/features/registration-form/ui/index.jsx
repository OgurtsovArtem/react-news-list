import { useEffect } from "react";
import Button from "../../../components/Button/Button";
import { Input } from "../../../entities/input";
import { useValidation } from "../../../entities/input/hooks";
import {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "../../../entities/input/model";
import style from "./style.module.css";

const RegistrationForm = ({ onClick, formProps }) => {
  // Учитывать порядок передачи аргументов. см. компонент Form
  const [handleInputChange, formIsValid, checkValidForm, send] = formProps;
  const password = useValidation();
  const email = useValidation();
  const name = useValidation();

  useEffect(() => {
    checkValidForm(password.valid, email.valid, name.valid);
  }, [password, email, name, checkValidForm]);
  return (
    <>
      <form className={style.form} name="signup" onSubmit={send}>
        <legend className={style.legend}>Регистрация</legend>
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
          onChange={handleInputChange}
          onInput={(event) => password.onInput(event)}
          minLength={MIN_PASSWORD_LENGTH}
          maxLength={MAX_PASSWORD_LENGTH}
          error={password.error}
        />
        <Input
          type="name"
          name="Имя"
          placeholder="Введите своё имя"
          onChange={handleInputChange}
          onInput={(event) => name.onInput(event)}
          minLength={MIN_NAME_LENGTH}
          maxLength={MAX_NAME_LENGTH}
          error={name.error}
        />
        <Button className={style.button} type="submit" color="primary" disabled={!formIsValid}>
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
