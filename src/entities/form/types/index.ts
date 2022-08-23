import { ReactElement } from "react";

export interface IFormTypes {
  className?: string;
  path: string;
  children(handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void): ReactElement;
}

export interface IFormBodyTypes {
  readonly email?: string;
  readonly name?: string;
  readonly password?: string;
  readonly token?: string;
}
