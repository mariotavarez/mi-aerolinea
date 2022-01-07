// Models
import { ButtonModel } from "../../../interfaces/buttons/ButtonModel";

export const Button = ({
  text,
  size = "md",
  type,
  icon,
  onChildClick,
  typeBtn = "button",
}: ButtonModel) => {
  return (
    <>
      <button
        type={typeBtn}
        onClick={onChildClick}
        className={`${type} ${size}`}
      >
        <span>{text}</span> {icon}
      </button>
    </>
  );
};
