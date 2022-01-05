// Sweet Alert 2
import Swal from "sweetalert2";
// Models
import { AlertModel } from "../interfaces/alerts/AlertModel";

export const useAlertMessage = () => {
  // Confirm Alert Message
  const confirmMessage = ({ title, text }: AlertModel) => {
    Swal.fire(title, text, "success");
  };

  // Info Alert Message
  const infoMessage = ({ title, text }: AlertModel) => {
    Swal.fire(title, text, "info");
  };

  // Error Alert Message
  const errorMessage = ({ title, text }: AlertModel) => {
    Swal.fire(title, text, "error");
  };

  return {
    confirmMessage,
    infoMessage,
    errorMessage,
  };
};
