import { ChangeEvent, useCallback, useState } from 'react';
import { errorEmail, errorMessages, errorName, errorPassword } from '../lib';

export const useValidation = () => {
    const [error, setError] = useState<string>(errorMessages.valueMissing);
    let valid: boolean = !error;

    const onInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event;

        switch (target.name) {
            case 'password':
                setError(errorPassword(target.value));
                break;
            case 'email':
                setError(errorEmail(target.value));
                break;
            case 'name':
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
