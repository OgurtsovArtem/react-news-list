import style from "./Input.module.css";

const Input = ({ name, type, placeholder, onChange }) => {
  const errorText = "Неправильный формат email";
  return (
    <label className={style.inputContainer}>
      <p className={style.name}>{name}</p>
      <input
        className={style.input}
        type={type}
        name={type}
        placeholder={placeholder}
        autoComplete={type === "password" ? "current-password" : "on"}
      />
      <p className={style.error}>{errorText}</p>
    </label>
  );
};

export default Input;
