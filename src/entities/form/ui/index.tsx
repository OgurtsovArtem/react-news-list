import { FC, FormEvent, ReactElement, useState } from "react";
import { sendForm } from "../api";

interface IFormTypes {
  url: string;
  children(
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    formIsValid: boolean,
    checkValidForm: () => void,
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
  ): ReactElement;
}

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
    // event.preventDefault();
    // const path = event.target.getAttribute("name");
    // console.log(path);
    // sendForm(path, formData).then((res) => console.log(res));
  };

  return <div>{children(handleInputChange, formIsValid, checkValidForm, onSubmit)}</div>;
};

export default Form;
