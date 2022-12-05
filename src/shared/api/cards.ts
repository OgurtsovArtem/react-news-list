import { checkResponse } from 'shared/utils/api';
import { getCookie } from 'shared/utils/cookie';
import { setTimeAgo } from 'shared/utils/date';
import { MAIN_URL, NEWS_API_SETTINGS } from 'shared/utils/global';

export const getNews = (keyword: string) => {
    return fetch(
        `${NEWS_API_SETTINGS.baseUrl}${NEWS_API_SETTINGS.endpoint}?q=${keyword}&` +
            `from=${setTimeAgo(7)}&` +
            `sortBy=${NEWS_API_SETTINGS.sortBy}&pageSize=${NEWS_API_SETTINGS.pageSize}&` +
            `apiKey=${NEWS_API_SETTINGS.apiKey}`
    ).then(checkResponse);
};

export const getArticles = () => {
    console.log('dd');
    return fetch(`${MAIN_URL}api/articles`, {
        method: 'GET',
        credentials: 'include',
        // mode: 'no-cors',
        headers: {
            authorization: `Bearer ${getCookie('accessToken')}`,
            'Content-Type': 'application/json',
        },
    }).then(checkResponse);
};

export const postArticles = (data: IPostArticleData) => {
    return fetch(`${MAIN_URL}/articles`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getKey('key')}`,
        },
        body: JSON.stringify({
            keyword: data.keyword,
            title: data.title,
            text: data.text,
            date: data.date,
            source: data.source,
            link: data.link,
            image: data.image,
        }),
    }).then(checkResponse);
};

export const deleteArticles = (id: string) => {
    return fetch(`${MAIN_URL}/articles/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            authorization: `Bearer ${localStorage.getKey('key')}`,
            'Content-Type': 'application/json',
        },
    });
};

export interface IPostArticleData {
    readonly keyword: string;
    readonly title: string;
    readonly text: string;
    readonly date: string;
    readonly source: string;
    readonly link: string;
    readonly image: string;
}
