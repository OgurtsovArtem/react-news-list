import { useEffect, useState } from 'react';
import { IStateTypes } from '../types';

export const useValidForm = (...rest: boolean[]) => {
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    useEffect(
        () => setFormIsValid(() => rest.every((v) => v === true)),
        [rest]
    );

    return formIsValid;
};

export const useForm = () => {
    const [formData, setFormData] = useState<IStateTypes>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return {
        formData,
        handleInputChange,
    };
};
