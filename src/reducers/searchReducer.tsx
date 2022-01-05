// Types
import { Types } from "../types/types";

export const searchReducer = (state = {}, action: any) => {
  switch (action.type) {
    case Types.uiCiudades:
      return {
        ciudades: action.payload.ciudades,
      };
    case Types.uiTravels:
      return {
        aerolinea: action.payload.aerolinea,
        costoPersona: action.payload.costoPersona,
        destino: action.payload.destino,
        origen: action.payload.origen,
        tiempoVuelo: action.payload.tiempoVuelo,
      };
    default:
      return state;
  }
};
