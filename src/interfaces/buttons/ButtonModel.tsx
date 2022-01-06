export interface ButtonModel {
  text: string;
  size?: "md" | "lg";
  type?: "primary" | "secondary" | "tertiary";
  icon: any;
  onChildClick?: any;
  typeBtn?: "button" | "submit";
}
