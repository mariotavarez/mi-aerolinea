// React Hooks
import { useEffect, useState } from "react";
// Styles
import search from "./Search.module.scss";
// React Redux
import { useDispatch } from "react-redux";
// Icons
import { FaPlaneDeparture, FaSearch } from "react-icons/fa";
// Shared
import { FormGenerator } from "../forms/FormGenerator";
// Models
import { FormModel } from "../../../interfaces/forms/FormModel";
// Json
import searchJsonForm from "../../../data/forms/Search.json";
// Actions
import { searchCities as getCities } from "../../../actions/searchAction";
import {
  cleanTravels,
  getAvailableTravels,
} from "../../../actions/travelsAction";
// Hooks
import { useAlertMessage } from "../../../hooks/useAlertMessage";

/**
 * @author Mario Tavarez
 * @date 03/01/2021
 * @type Shared
 * @description Search component, this component search all the available travels. Origen, Destino, Fecha de salida and
 * @returns
 */
export const Search = () => {
  // Dispatch
  const dispatch = useDispatch();
  const { infoMessage } = useAlertMessage();

  // Use Effect Hook for call search cities
  useEffect(() => {
    searchCities();
  }, []);

  const [valueForm, setValueForm] = useState<any>({
    origen: null,
    destino: null,
    fechaSalida: null,
    pasajeros: 0,
  });

  // Form Data Generator
  const formData: FormModel = {
    jsonStructure: searchJsonForm,
    nameButton: "Buscar",
    icon: <FaSearch size={"1rem"} />,
    typeBtn: "submit",
    onChildClick: () => searchCities,
    setValueForm: setValueForm,
  };

  // Search the cities
  const searchCities = () => {
    dispatch(getCities());
  };

  // Search the travels
  const handleSearchTravels = () => {
    const { origen, destino }: any = valueForm;
    // validate if the origen and destino isnt same
    if (origen === destino) {
      infoMessage({
        title: "Oops",
        text: "El origen y el destino no pueden ser los mismos",
      });
      dispatch(cleanTravels());
      return;
    }

    dispatch(getAvailableTravels(valueForm.origen, valueForm.destino));
  };

  return (
    <div
      className={`${search.container_search} animate__animated animate__flipInX`}
    >
      {/* HEADER */}
      <div className={search.header}>
        <FaPlaneDeparture size={"2rem"} />
        <span>Vuelos</span>
      </div>
      {/* HEADER */}
      {/* CONTENT */}
      <div className={search.content}>
        <FormGenerator {...formData} onChildClick={handleSearchTravels} />
      </div>
      {/* CONTENT */}
    </div>
  );
};
