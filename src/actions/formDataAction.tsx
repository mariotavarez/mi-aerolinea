// Types
import { Types } from "../types/types";

// Add a data to Form Data Store
export const addFormData = (formData: any) => {
  console.log("form data ", formData);

  return async (dispatch: any) => {
    dispatch(setFormData(formData));
  };
};

// Clean Form Data
export const cleanFormData = () => {
  return async (dispatch: any) => {
    dispatch(setCleanFormData());
  };
};

// Add data to Form
export const setFormData = (formData: any) => ({
  type: Types.uiAddDataForm,
  payload: {
    origen: formData.origen,
    destino: formData.destino,
    fechaSalida: formData.fechaSalida,
    pasajeros: formData.pasajeros,
  },
});

// Clean Form Data
export const setCleanFormData = () => ({
  type: Types.uiCleanDataForm,
});
