import { Button } from 'shared/ui/button';
import style from './style.module.css';
import { Input } from 'entities/input';
import { FC, FormEvent, useEffect } from 'react';
import { useValidation } from 'entities/input/hooks/model';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from 'entities/input/lib';
import { ILoginFormTypes } from '../types';
import { useValidForm } from 'entities/form/hooks';
import { useForm } from 'entities/form/model';
import { modelAuth } from 'shared/models/auth-form';
import { useStore } from 'effector-react';
import { Loader } from 'shared/ui/loader';
import { modelModal } from 'shared/models/modal';
import { AUTH_MODAL_ID, DONE_LOGIN_MODAL_ID } from 'widgets/popups/lib/names';

const LoginForm: FC<ILoginFormTypes> = ({ onClick }) => {
    const password = useValidation();
    const email = useValidation();
    const isValid = useValidForm(password.valid, email.valid);
    const { formData, handleInputChange } = useForm();

    const response = useStore(modelAuth.$authFormData);
    const error = useStore(modelAuth.$authFormFailed);
    const loading = useStore(modelAuth.$authFormLoading);
    const errMessage = useStore(modelAuth.$authFormFailMessage);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        modelAuth.removeError();
        modelAuth.sendLoginForm(formData);
        console.log(response);
    };

    useEffect(() => {
        if (error) {
            modelAuth.removeError();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    useEffect(() => {
        if (response) {
            modelModal.closeModal(AUTH_MODAL_ID);
            modelAuth.resetData();
            modelModal.openModal(DONE_LOGIN_MODAL_ID);
        }
    }, [response]);

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

            <Button
                className={style.button}
                type="submit"
                color="primary"
                disabled={!isValid}
            >
                {loading ? <Loader size="small" inverse /> : 'Войти'}
            </Button>
            <p className={style.error}>{error && errMessage}</p>
            <div className={style.footer}>
                <span className={style.text}>или</span>
                <button
                    className={style.changeFormButton}
                    onClick={onClick}
                    type="button"
                >
                    Зарегистрироваться
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
