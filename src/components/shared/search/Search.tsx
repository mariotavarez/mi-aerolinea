// React Hooks
import { useEffect, useState } from "react";
// Styles
import search from "./Search.module.scss";
// React Redux
import { useDispatch, useSelector } from "react-redux";
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

/**
 * @author Mario Tavarez
 * @date 03/01/2021
 * @type Shared
 * @description Search component, this component search all the available travels. Origen, Destino, Fecha de salida and
 * @returns
 */
export const Search = () => {
  const dispatch = useDispatch();

  // Use Effect Hook for call search cities
  useEffect(() => {
    searchCities();
  }, []);

  // Get the values of the state
  const { ciudades } = useSelector((state: any) => state.searchAction);

  const formData: FormModel = {
    jsonStructure: searchJsonForm,
    nameButton: "Buscar",
    icon: <FaSearch size={"1rem"} />,
    typeBtn: "submit",
    actionButton: () => handleSearch(),
  };

  // Search the cities
  const searchCities = () => {
    dispatch(getCities());
  };

  const handleSearch = () => {
    alert("Evento lanzado");
  };

  return (
    <div className={search.container_search}>
      {/* HEADER */}
      <div className={search.header}>
        <FaPlaneDeparture size={"2rem"} />
        <span>Vuelos</span>
      </div>
      {/* HEADER */}
      {/* CONTENT */}
      <div className={search.content}>
        <FormGenerator {...formData} />
      </div>
      {/* CONTENT */}
    </div>
  );
};
