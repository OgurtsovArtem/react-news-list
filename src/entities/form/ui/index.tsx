import { FC, FormEvent, useState } from "react";
import { sendForm } from "../api";
import { IFormTypes } from "../types";

const Form: FC<IFormTypes> = ({ className, path, children }) => {
  const [formData, setFormData] = useState({});

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
    sendForm(path, formData).then((res) => console.log(res));
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      {children(handleInputChange)}
    </form>
  );
};

export default Form;
