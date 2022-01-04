// Models
import { ButtonModel } from "../../../interfaces/buttons/ButtonModel";

export const Button = ({ text, size, type, icon }: ButtonModel) => {
  return (
    <>
      <button className={`${type} ${size}`}>
        {text} {icon}
      </button>
    </>
  );
};
