// Models
import { ButtonModel } from "../../../interfaces/buttons/ButtonModel";

export const Button = ({
  text,
  size = "md",
  type,
  icon,
  actionButton,
  typeBtn = "button",
}: ButtonModel) => {
  return (
    <>
      <button
        type={typeBtn}
        onClick={() => actionButton}
        className={`${type} ${size}`}
      >
        {text} {icon}
      </button>
    </>
  );
};
