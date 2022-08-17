import { useValidation } from "entities/input/hooks/model";
import {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "entities/input/lib";
import { FC, FormEvent } from "react";
import { useEffect } from "react";
import Button from "../../../components/Button/Button";
import { Input } from "../../../entities/input";

import style from "./style.module.css";

interface IFormPropsTypes {
  handleInputChange: (event: React.FormEvent<HTMLFormElement>) => void;
  formIsValid: boolean;
  checkValidForm: () => void;
  event: (event: React.FormEventHandler<HTMLFormElement>) => void;
}
interface IRegistrationFormTypes<T> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  formProps: Array<T>;
}

const RegistrationForm: FC<IRegistrationFormTypes<IFormPropsTypes>> = ({ onClick, formProps }) => {
  // Учитывать порядок передачи аргументов. см. компонент Form
  console.log(formProps);
  const [handleInputChange, formIsValid, checkValidForm, onSubmit] = formProps;
  const password = useValidation();
  const email = useValidation();
  const name = useValidation();

  useEffect(() => {
    checkValidForm(password.valid, email.valid, name.valid);
  }, [password, email, name, checkValidForm]);
  return (
    <>
      <form className={style.form} name="signup" onSubmit={onSubmit}>
        <legend className={style.legend}>Регистрация</legend>
        <Input
          type="email"
          name="Email"
          placeholder="Введите почту"
          onChange={handleInputChange}
          onInput={email.onInput}
          error={email.error}
        />
        <Input
          type="password"
          name="Пароль"
          placeholder="Введите пароль"
          onChange={handleInputChange}
          onInput={password.onInput}
          minLength={MIN_PASSWORD_LENGTH}
          maxLength={MAX_PASSWORD_LENGTH}
          error={password.error}
        />
        <Input
          type="name"
          name="Имя"
          placeholder="Введите своё имя"
          onChange={handleInputChange}
          onInput={name.onInput}
          minLength={MIN_NAME_LENGTH}
          maxLength={MAX_NAME_LENGTH}
          error={name.error}
        />
        <Button className={style.button} type="submit" color="primary" disabled={!formIsValid}>
          Зарегистрироваться
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