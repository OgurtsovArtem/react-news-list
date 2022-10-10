import style from './style.module.css';
import { FC, FormEvent, useEffect } from 'react';
import { IRegistrationFormTypes } from '../types';
import { Input } from 'entities/input';
import { Button } from 'shared/ui/button';
import { useValidation } from 'entities/input/hooks/model';
import { useValidForm } from 'entities/form/hooks';
import { useForm } from 'entities/form/model';
import { modelAuthForm } from 'shared/models/auth-form';
import { useStore } from 'effector-react';
import { Loader } from 'shared/ui/loader';
import {
    MAX_NAME_LENGTH,
    MAX_PASSWORD_LENGTH,
    MIN_NAME_LENGTH,
    MIN_PASSWORD_LENGTH,
} from 'entities/input/lib';
import { modelModal } from 'shared/models/modal';
import { AUTH_MODAL_ID, DONE_REGISTR_MODAL_ID } from 'widgets/popups/lib/names';

const RegistrationForm: FC<IRegistrationFormTypes> = ({ onClick }) => {
    const password = useValidation();
    const email = useValidation();
    const name = useValidation();

    const isValid = useValidForm(password.valid, email.valid, name.valid);
    const { formData, handleInputChange } = useForm();

    const response = useStore(modelAuthForm.$authFormData);
    const error = useStore(modelAuthForm.$authFormFailed);
    const loading = useStore(modelAuthForm.$authFormLoading);
    const errMessage = useStore(modelAuthForm.$authFormFailMessage);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        modelAuthForm.sendRegistrForm(formData);
        console.log(response, error, loading);
    };
    useEffect(() => {
        if (error) {
            modelAuthForm.removeError();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    useEffect(() => {
        if (response) {
            console.log(response);
            modelModal.closeModal(AUTH_MODAL_ID);
            modelAuthForm.resetData();
            modelModal.openModal(DONE_REGISTR_MODAL_ID);
        }
    }, [response]);

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
            <Button
                className={style.button}
                type="submit"
                color="primary"
                disabled={!isValid}
            >
                {loading ? (
                    <Loader size="small" inverse />
                ) : (
                    'Зарегистрироваться'
                )}
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
