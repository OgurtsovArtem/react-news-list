import { ChangeEvent, LegacyRef } from "react";

// MESSAGES
export interface IMessageTypes<Name, Email, Password> {
  readonly name: Name;
  readonly email: Email;
  readonly password: Password;
  readonly valueMissing: string;
}
export interface IMessagesNameTypes {
  readonly tooShort: string;
  readonly tooLong: string;
  readonly patternMismatch: string;
}
export interface IMessagesPaswordTypes {
  readonly tooShort: string;
  readonly tooLong: string;
  readonly patternMismatch: string;
}
export interface IMessagesEamilTypes {
  readonly patternMismatch: string;
}
// UI
export interface IInputTypes {
  name: string;
  type: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlure?: () => void;
  onFocus?: () => void;
  value?: string | number | readonly string[] | undefined;
  error?: string | null;
  inputRef?: LegacyRef<HTMLInputElement> | undefined;
}
