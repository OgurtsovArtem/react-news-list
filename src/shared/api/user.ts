import { checkResponse } from "shared/utils/api";
import { MAIN_URL } from "shared/utils/global";

export const getUser = (token: string) => {
  return fetch(`${MAIN_URL}/auth/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export interface ILoginDataTypes {
  readonly email: string;
  readonly password: string;
}

export interface IRegistrationDataTypes {
  readonly email: string;
  readonly name: string;
  readonly password: string;
}

export const login = (data: ILoginDataTypes | object) => {
  return fetch(`${MAIN_URL}api/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
};

export const registration = (data: IRegistrationDataTypes) => {
  return fetch(`${MAIN_URL}api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
};
