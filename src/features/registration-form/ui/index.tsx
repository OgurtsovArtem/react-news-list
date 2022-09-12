import style from "./style.module.css";
import { FC, FormEvent } from "react";
import { IRegistrationFormTypes } from "../types";
import { Input } from "entities/input";
import { Button } from "shared/ui/button";
import { useValidation } from "entities/input/hooks/model";
import { useValidForm } from "entities/form/hooks";
import { useForm } from "entities/form/model";
import { modelRegistration } from "../model";
import { useStore } from "effector-react";
import { Loader } from "shared/ui/loader";
import {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "entities/input/lib";
import { modelModal } from "shared/modal";
import { AUTH_MODAL_ID, DONE_MODAL_ID } from "widgets/popups/lib/names";

const RegistrationForm: FC<IRegistrationFormTypes> = ({ onClick }) => {
  const password = useValidation();
  const email = useValidation();
  const name = useValidation();

  const isValid = useValidForm(password.valid, email.valid, name.valid);
  const { formData, handleInputChange } = useForm();

  const response = useStore(modelRegistration.$registrationForm);
  const error = useStore(modelRegistration.$isRegistrationFormFailed);
  const loading = useStore(modelRegistration.$isRegistrationFormLoading);
  const errMessage = useStore(modelRegistration.$registrationFormFailMessage);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    modelRegistration.sendForm(formData);
    console.log(response, error, loading);
    if (response) {
      modelModal.closeModal(AUTH_MODAL_ID);
      modelModal.openModal(DONE_MODAL_ID);
    }
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
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
      <Button className={style.button} type="submit" color="primary" disabled={!isValid}>
        {loading ? <Loader size="small" inverse /> : "Зарегистрироваться"}
      </Button>
      <p className={style.error}>{error && errMessage}</p>
      <div className={style.footer}>
        <span className={style.text}>или</span>
        <button className={style.changeFormButton} onClick={onClick}>
          Войти
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
