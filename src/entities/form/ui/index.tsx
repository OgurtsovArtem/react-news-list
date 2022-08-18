import { FC, FormEvent, useState } from "react";
import { sendForm } from "../api";
import { IFormTypes } from "../types";

const Form: FC<IFormTypes> = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  const checkValidForm = (...rest: boolean[]) => setFormIsValid(rest.every((v) => v === true));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const path = event.currentTarget.getAttribute("name");
    console.log(path);
    sendForm(path, formData).then((res) => console.log(res));
  };

  return <div>{children(handleInputChange, formIsValid, checkValidForm, onSubmit)}</div>;
};

export default Form;
