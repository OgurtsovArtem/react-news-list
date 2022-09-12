import { createEvent } from "effector";
import { IStateTypes } from "entities/form/types";

export const sendForm = createEvent<IStateTypes>();
export const resetForm = createEvent();
export const removeError = createEvent();
