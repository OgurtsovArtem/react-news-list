import { checkResponse } from 'shared/utils/api';
import { getCookie } from 'shared/utils/cookie';
import { MAIN_URL } from 'shared/utils/global';

export const getUser = () => {
    return fetch(`${MAIN_URL}api/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${getCookie('accessToken')}`,
        },
    }).then(checkResponse);
};

export const login = (data: ILoginDataTypes | object) => {
    return fetch(`${MAIN_URL}api/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    }).then(checkResponse);
};

export const registration = (data: IRegistrationDataTypes) => {
    return fetch(`${MAIN_URL}api/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    }).then(checkResponse);
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
