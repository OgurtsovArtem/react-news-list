import { useState } from "react";
import { IStateTypes } from "../types";

export const useForm = () => {
  const [formData, setFormData] = useState<IStateTypes>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    formData,
    handleInputChange,
  };
};
