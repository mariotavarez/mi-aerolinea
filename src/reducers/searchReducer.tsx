// Types
import { Types } from "../types/types";

export const searchReducer = (state = {}, action: any) => {
  switch (action.type) {
    case Types.uiCiudades:
      return {
        ciudades: action.payload.ciudades,
      };
    default:
      return state;
  }
};
