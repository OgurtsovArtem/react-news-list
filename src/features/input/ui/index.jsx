import style from "./style.module.css";
import { errorEmail, errorName, errorPassword } from "../model";
import { useRef, useState } from "react";

export const Input = (props) => {
  const { name, type, placeholder, maxLength, minLength } = props;
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const checkValid = (event) => {
    const { target } = event;

    switch (target.name) {
      case "password":
        setError(errorPassword(target.value));
        break;
      case "email":
        setError(errorEmail(target.value));
        break;
      case "name":
        setError(errorName(target.value));
        break;

      default:
        break;
    }
  };

  return (
    <label className={style.inputContainer}>
      <p className={style.name}>{name}</p>
      <input
        ref={inputRef}
        className={style.input}
        type={type}
        name={type}
        placeholder={placeholder}
        onInput={checkValid}
        maxLength={maxLength}
        minLength={minLength}
        autoComplete={type === "password" ? "current-password" : "off"}
      />
      <p className={style.error}>{error}</p>
    </label>
  );
};
