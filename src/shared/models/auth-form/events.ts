import { createEvent } from 'effector';
import { IStateTypes } from 'entities/form/types';

export const sendRegistrForm = createEvent<IStateTypes>();
export const sendLoginForm = createEvent<IStateTypes>();
export const resetData = createEvent();
export const removeError = createEvent();
