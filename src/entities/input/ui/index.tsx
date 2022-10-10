import { FC } from 'react';
import { IInputTypes } from '../types';
import style from './style.module.css';

const Input: FC<IInputTypes> = (props) => {
    const {
        name,
        type,
        placeholder,
        maxLength,
        minLength,
        onChange,
        onInput,
        onBlure,
        onFocus,
        value,
        error,
        inputRef,
    } = props;

    return (
        <label className={style.inputContainer}>
            <p className={style.name}>{name}</p>
            <input
                ref={inputRef}
                className={style.input}
                type={type}
                name={type}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
                value={value}
                onInput={onInput}
                onChange={onChange}
                onBlur={onBlure}
                onFocus={onFocus}
                autoComplete={type === 'password' ? 'current-password' : 'off'}
            />
            <p className={style.error}>{error}</p>
        </label>
    );
};

export default Input;
