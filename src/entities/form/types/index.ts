import { FormEvent, ReactElement } from "react";

export interface IFormTypes {
  className?: string;
  path?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children(handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void): ReactElement;
}
