// Styles
import cardPrice from "./CardPrice.module.scss";
// Shared
import { Button } from "../..";
// Icons
import { FaHandPointer } from "react-icons/fa";

export const CardPrice = ({ costoPersona }: { costoPersona: string }) => {
  return (
    <div className={cardPrice.container_card_price}>
      {/* COSTO PERSONA */}
      <p>${costoPersona}.00 MXN</p>
      <span>PRECIO POR PERSONA</span>
      {/* COSTO PERSONA */}
      {/* ACTION BUTTON */}
      <div>
        {/* BUTTON */}
        <Button icon={<FaHandPointer />} text="Elegir" type={"primary"} />
        {/* BUTTON */}
      </div>
      {/* ACTION BUTTON */}
    </div>
  );
};
