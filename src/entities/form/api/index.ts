import { checkResponse } from "../../../shared/utils/api";
import { MAIN_URL } from "../../../shared/utils/global";
import { IFormBodyTypes } from "../types";

export const sendForm = (path: string, body: IFormBodyTypes) => {
  return fetch(`${MAIN_URL}api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(checkResponse);
};
