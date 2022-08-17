import { useCallback, useState } from "react";
import { errorEmail, errorMessages, errorName, errorPassword } from "../model";

export const useValidation = () => {
  const [error, setError] = useState(errorMessages.valueMissing);
  let valid = !error;

  const onInput = useCallback((event) => {
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
  }, []);

  return {
    onInput,
    valid,
    error,
  };
};
