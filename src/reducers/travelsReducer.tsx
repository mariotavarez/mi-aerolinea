// Types
import { Types } from "../types/types";

export const travelsReducer = (state = [], action: any) => {
  switch (action.type) {
    case Types.uiTravels:
      return {
        viajes: action.payload.viajes,
      };

    case Types.uiCleanTravels: {
      return [];
    }

    default:
      return state;
  }
};
