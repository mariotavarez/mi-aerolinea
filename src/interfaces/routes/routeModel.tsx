// React
import { LazyExoticComponent } from "react";
// Define an Type JSX Element Component
type JSXComponent = () => JSX.Element;

export interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}
