import { MAIN_URL } from "shared/utils/global";

export const getUser = (token: string) => {
  return fetch(`${MAIN_URL}/auth/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
