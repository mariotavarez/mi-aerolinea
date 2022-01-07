// Styles
import confirmData from "./ConfirmData.module.scss";
// React Redux
import { useDispatch } from "react-redux";
// Shared
import { FormGenerator } from "../../shared";
// Json
import confirmDataJsonForm from "../../../data/forms/ConfirmData.json";
// Icons
import { FaCreditCard } from "react-icons/fa";
// Hooks
import { useState } from "react";
import { useAlertMessage } from "../../../hooks/useAlertMessage";
// Models
import { FormModel } from "../../../interfaces/forms/FormModel";
// Actions
import { cleanShoppingCart } from "../../../actions/shoppingCartAction";
// Router Dom
import { useNavigate } from "react-router-dom";
import { cleanTravels } from "../../../actions/travelsAction";

const ConfirmData = () => {
  // Alert Message
  const { confirmMessage } = useAlertMessage();
  // Value Data
  const [valueForm, setValueForm] = useState<any>({});
  // Dispatch
  const dispatch = useDispatch();
  // History Navigate
  const history = useNavigate();

  // Form Data Generator
  const formData: FormModel = {
    jsonStructure: confirmDataJsonForm,
    nameButton: "Confirmar",
    icon: <FaCreditCard size={"1rem"} />,
    rows: 2,
    typeBtn: "submit",
    onChildClick: () => sendConfirmData(),
    setValueForm: setValueForm,
  };

  // Send a confirmation message and erase the shopping cart
  const sendConfirmData = () => {
    confirmMessage({
      title: "Reserva éxitosa",
      text: "La reserva de sus boletos se ha hecho de manera éxitosa",
    });
    // Clean Shopping Cart
    dispatch(cleanShoppingCart());
    // Clean Travels
    dispatch(cleanTravels());
    // Change to the home route
    history("/");
  };

  return (
    <div className={confirmData.container_confirm_data}>
      {/* TITLE RESERVATION */}
      <div className={`${confirmData.title_confirm_data}`}>
        <span>Confirmación de datos</span>
      </div>
      {/* TITLE RESERVATION */}
      {/* FORM CONFIRM DATA */}
      <div className={confirmData.form_confirm_data}>
        <span>Ingrese los datos de confirmación</span>
        <FormGenerator {...formData} />
      </div>
      {/* FORM CONFIRM DATA */}
      {/* FORM CONFIRM DATA */}
      <div
        className={`${confirmData.img_confirm_data} animate__animated animate__fadeIn`}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/miaerolinea-23192.appspot.com/o/miaerolinea%2Fbanners%2Fconfirm-data.png?alt=media&token=f57a561f-079f-42df-996a-18744feec4cf"
          alt="confirm-data"
        />
      </div>
      {/* FORM CONFIRM DATA */}
    </div>
  );
};

export default ConfirmData;
