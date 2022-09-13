import { ReactElement } from "react";

export interface IFormTypes {
  className?: string;
  path: string;
  children(handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void): ReactElement;
}

export interface IStateTypes {
  [name: string]: number | string | boolean;
}
