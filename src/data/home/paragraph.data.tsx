// Icons
import { AiOutlineClockCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
// Models
import { IconModel } from "../../interfaces/icons/IconsModel";

export const PARAGRAPH_DATA: IconModel[] = [
  {
    icon: <AiOutlineShoppingCart className="icon" size={"2rem"} />,
  },
  {
    icon: <FaMoneyBillAlt className="icon" size={"2rem"} />,
  },
  {
    icon: <AiOutlineClockCircle className="icon" size={"2rem"} />,
  },
];
