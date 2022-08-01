import style from "./style.module.css";
import { useState } from "react";

export const Input = ({ name, type, placeholder, onChange }) => {
  const errorText = "Неправильный формат email";

  const [value, setValue] = useState("");

  const checkValid = (event) => {
    const { target } = event;

    switch (target.type) {
      case "password":
        break;
      case "email":
        break;
      case "name":
        break;

      default:
        break;
    }
  };

  return (
    <label className={style.inputContainer}>
      <p className={style.name}>{name}</p>
      <input
        className={style.input}
        type={type}
        name={type}
        placeholder={placeholder}
        onInput={checkValid}
        autoComplete={type === "password" ? "current-password" : "on"}
      />
      <p className={style.error}>{errorText}</p>
    </label>
  );
};
