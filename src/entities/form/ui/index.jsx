import { useState } from "react";
import { sendForm } from "../api";

const Form = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  const checkValidForm = (...rest) => setFormIsValid(rest.every((v) => v === true));

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const send = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute("name");
    console.log(path);
    sendForm(path, formData).then((res) => console.log(res));
  };

  return <div>{children(handleInputChange, formIsValid, checkValidForm, send)}</div>;
};

export default Form;
