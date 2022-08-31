import { Button } from "shared/ui/button";
import style from "./style.module.css";
import { Input } from "entities/input";
import { FC, FormEvent } from "react";
import { useValidation } from "entities/input/hooks/model";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "entities/input/lib";
import { ILoginFormTypes } from "../types";
import { useValidForm } from "entities/form/hooks";
import { useForm } from "entities/form/model";
import { modelLogin } from "../model";
import { useStore } from "effector-react";
import { Loader } from "shared/ui/loader";

const LoginForm: FC<ILoginFormTypes> = ({ onClick }) => {
  const password = useValidation();
  const email = useValidation();
  const isValid = useValidForm(password.valid, email.valid);
  const { formData, handleInputChange } = useForm();

  const response = useStore(modelLogin.$loginForm);
  const error = useStore(modelLogin.$isLoginFormFailed);
  const loading = useStore(modelLogin.$isLoginFormLoading);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    modelLogin.sendForm(formData);
    console.log(response, error, loading);
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <legend className={style.legend}>Вход</legend>
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
        minLength={MIN_PASSWORD_LENGTH}
        maxLength={MAX_PASSWORD_LENGTH}
        onChange={handleInputChange}
        onInput={password.onInput}
        error={password.error}
      />
      <Button className={style.button} type="submit" color="primary" disabled={!isValid}>
        {loading ? <Loader size="small" inverse /> : "Войти"}
      </Button>
      <div className={style.footer}>
        <span className={style.text}>или</span>
        <button className={style.changeFormButton} onClick={onClick} type="button">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
