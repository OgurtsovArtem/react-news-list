import { ChangeEvent, FormEvent, ReactElement } from "react";

/**
 * Порядок типизации функций согласно передачи аргументов в
 * @see IFormTypes
 *
 * 1 - handleInputChange
 *
 * 2 - formIsValid
 *
 * 3 - checkValidForm
 *
 * 4 - onSubmit
 */
export type TFormPropsTupleTypes = [
  (event: ChangeEvent<HTMLInputElement>) => void,
  boolean,
  (...rest: boolean[]) => void,
  (event: FormEvent<HTMLFormElement>) => void
];

export interface IFormTypes {
  children(
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    formIsValid: boolean,
    checkValidForm: () => void,
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
  ): ReactElement;
}
