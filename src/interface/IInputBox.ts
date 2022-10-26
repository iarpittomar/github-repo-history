export interface IInputBox {
  label: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
