// Styles
import search from "./Search.module.scss";
// Icons
import { FaPlaneDeparture } from "react-icons/fa";
import { FormGenerator } from "../forms/FormGenerator";
// Models
import { FormModel } from "../../../interfaces/forms/FormModel";

/**
 * @author Mario Tavarez
 * @date 03/01/2021
 * @type Shared
 * @description Search component, this component search all the available travels. Origen, Destino, Fecha de salida and
 * @returns
 */
export const Search = () => {
  const formData: FormModel = {
    jsonStructure: null,
    nameButton: "Buscar",
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
        {/* FORM */}
        <FormGenerator {...formData} />
        {/* FORM */}
      </div>
      {/* CONTENT */}
    </div>
  );
};
