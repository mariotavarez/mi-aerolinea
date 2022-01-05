// Firebase config
import { db, getDocs, collection } from "../firebase/config.firebase";
// Types
import { Types } from "../types/types";

// Search the cities in ciudades collection
export const searchCities = () => {
  return async (dispatch: any) => {
    // Get ciudades collection
    const docSnap = await getDocs(collection(db, "ciudades"));
    // Return the cities
    const cities: any[] = docSnap.docs.map((doc) => ({ ...doc.data() }));
    // Set cities in the store
    dispatch(setCities(cities));
  };
};

// Set and Return the cities objetc
export const setCities = (ciudades: any[]) => ({
  type: Types.uiCiudades,
  payload: {
    ciudades,
  },
});
