import { checkResponse } from "../../../shared/utils/api";
import { MAIN_URL } from "../../../shared/utils/global";

export const sendForm = (path, body) => {
  return fetch(`${MAIN_URL}api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(checkResponse);
};
