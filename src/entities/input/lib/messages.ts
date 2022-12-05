import {
    IMessagesEamilTypes,
    IMessagesNameTypes,
    IMessagesPaswordTypes,
    IMessageTypes,
} from '../types';

export const errorMessages: IMessageTypes<
    IMessagesNameTypes,
    IMessagesEamilTypes,
    IMessagesPaswordTypes
> = {
    name: {
        tooShort: 'Имя должно содержать больше 2-х символов',
        tooLong: 'У нас больше нет символов ヽ(°□° )ノ',
        patternMismatch:
            'Ипользовать можно буквы и цифры, первый символ обязательно буква',
    },
    password: {
        tooShort: `Минимальное количество 8 символов`,
        tooLong: 'Не, ну это уже перебор',
        patternMismatch:
            'Используйте цифры, строчные и прописные латинские буквы. Например (e2EpaSsword)',
    },
    email: {
        patternMismatch: 'Неверный формат Email',
    },
    valueMissing: 'Обязательное поле',
};
