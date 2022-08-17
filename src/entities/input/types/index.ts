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
