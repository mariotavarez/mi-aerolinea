export interface InputModel {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "file" | "tel" | "hidden" | "week";
  placeholder?: string;
  [x: string]: any;
}
