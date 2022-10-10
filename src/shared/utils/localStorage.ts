export const saveStorageKey = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageKey = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '');
};
