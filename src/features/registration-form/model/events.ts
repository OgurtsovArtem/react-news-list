import { createEvent } from "effector";
import { IStateTypes } from "entities/form/types";
import { IRegistrationDataTypes } from "shared/api/user";

export const sendForm = createEvent<IStateTypes>();
