// Types
import { Types } from "../types/types";

// Data Reducer
export const dataFormReducer = (state = {}, action: any) => {
  switch (action.type) {
    case Types.uiAddDataForm:
      return {
        origen: action.payload.origen,
        destino: action.payload.destino,
        fechaSalida: action.payload.fechaSalida,
        pasajeros: action.payload.pasajeros,
      };
    case Types.uiCleanDataForm:
      return {
        form: {},
      };
    default:
      return state;
  }
};
