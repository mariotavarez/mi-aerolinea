// React
import { ReactElement } from "react";

export interface FormModel {
  jsonStructure: any;
  nameButton: string;
  icon?: ReactElement;
  rows?: 1 | 2;
  onChildClick: any;
  typeBtn: "button" | "submit";
  setValueForm: any;
}
