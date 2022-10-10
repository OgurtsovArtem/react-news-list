import { useEffect, useState } from 'react';

export const useValidForm = (...rest: boolean[]) => {
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    useEffect(
        () => setFormIsValid(() => rest.every((v) => v === true)),
        [rest]
    );

    return formIsValid;
};
