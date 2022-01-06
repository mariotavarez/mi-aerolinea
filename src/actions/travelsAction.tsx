// Firebase config
import {
  db,
  getDocs,
  collection,
  query,
  where,
} from "../firebase/config.firebase";

// Types
import { Types } from "../types/types";

// Get the Available travels
export const getAvailableTravels = (origen: string, destino: string) => {
  return async (dispatch: any) => {
    // Get viajes collection
    const queryTravels = query(
      collection(db, "viajes"),
      where("origen", "==", origen),
      where("destino", "==", destino)
    );
    const docSnap = await getDocs(queryTravels);
    const viajes: any[] = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // Set the travels in the store
    dispatch(setTravels(viajes));
  };
};

// Clean the travels
export const cleanTravels = () => {
  return (dispatch: any) => {
    dispatch(setCleanTravels());
  };
};

// Set and Return the travels
export const setTravels = (viajes: any[]) => ({
  type: Types.uiTravels,
  payload: {
    viajes,
  },
});

export const setCleanTravels = () => ({
  type: Types.uiCleanTravels,
});
