// Styles
import cardPrice from "./CardPrice.module.scss";
// React Redux
import { useDispatch, useSelector } from "react-redux";
// Hooks
import { useAlertMessage } from "../../../../hooks/useAlertMessage";
import { useNavigate } from "react-router-dom";
// Shared
import { Button } from "../..";
// Icons
import { FaHandPointer } from "react-icons/fa";
import { addTravelToShoppingCart } from "../../../../actions/shoppingCartAction";
// Models
import { AlertModel } from "../../../../interfaces/alerts/AlertModel";
// Actions
export const CardPrice = ({
  costoPersona,
  id,
}: {
  costoPersona: string;
  id: any;
  noPersonas: string;
  fecha: string;
}) => {
  // Dispatch
  const dispatch = useDispatch();
  // Travels
  const viaje = useSelector((state: any) =>
    state.travelsAction.viajes.find((viaje: any) => viaje.id === id)
  );
  // Form Data
  const formData = useSelector((state: any) => state.formData);
  // Alert Message
  const { confirmMessage } = useAlertMessage();
  // History Navigate
  const history = useNavigate();

  // Add the selected travel
  const handleSelectTravel = () => {
    // My Shopping Cart
    const myShoppingCart = {
      id,
      noPersonas: formData.pasajeros,
      fecha: formData.fechaSalida,
      ...viaje,
    };

    // Add Travel to Shoppint cart
    dispatch(addTravelToShoppingCart(myShoppingCart));
    // Build the message success
    const alertMessage: AlertModel = {
      title: "Viaje Agregado",
      text: "El viaje se ha agregado correctamente a tu carrito",
    };
    // Call a Confirm Message function
    confirmMessage(alertMessage);
    history("/my-reservations");
  };

  return (
    <div className={cardPrice.container_card_price}>
      {/* COSTO PERSONA */}
      <p>${costoPersona}.00 MXN</p>
      <span>PRECIO POR PERSONA</span>
      {/* COSTO PERSONA */}
      {/* ACTION BUTTON */}
      <div>
        {/* BUTTON */}
        <Button
          icon={<FaHandPointer />}
          onChildClick={() => handleSelectTravel()}
          text="Agregar al carrito"
          type={"primary"}
        />
        {/* BUTTON */}
      </div>
      {/* ACTION BUTTON */}
    </div>
  );
};
