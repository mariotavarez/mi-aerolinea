// Styles
import selection from "./Selection.module.scss";
// Shared
import { Screen } from "../../shared/screen/Screen";
import { CardAeroline } from "../../shared";
// Models
import { TravelsModel } from "../../../interfaces/cards/TravelsModel";

const Selection = () => {
  // Travels
  const travels: TravelsModel[] = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/miaerolinea-23192.appspot.com/o/miaerolinea%2Faerolineas%2FViva_aerobus.jpg?alt=media&token=46637ad8-12ee-40aa-98e9-fcdec2af5d2e",
      costoPersona: "1755",
      llegada:
        "Guadalajara, Don Miguel Hidalgo y Costilla, Jalisco, México (GDL)",
      salida: "Monterrey, Nuevo León, México (MTY)",
      tiempoVuelo: "1h 30min",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/miaerolinea-23192.appspot.com/o/miaerolinea%2Faerolineas%2Fvolaris.png?alt=media&token=5ee29558-9d95-4462-868e-8fa0659dfd60",
      costoPersona: "1755",
      llegada:
        "Guadalajara, Don Miguel Hidalgo y Costilla, Jalisco, México (GDL)",
      salida: "Monterrey, Nuevo León, México (MTY)",
      tiempoVuelo: "1h 30min",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/miaerolinea-23192.appspot.com/o/miaerolinea%2Faerolineas%2FViva_aerobus.jpg?alt=media&token=46637ad8-12ee-40aa-98e9-fcdec2af5d2e",
      costoPersona: "1755",
      llegada:
        "Guadalajara, Don Miguel Hidalgo y Costilla, Jalisco, México (GDL)",
      salida: "Monterrey, Nuevo León, México (MTY)",
      tiempoVuelo: "1h 30min",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/miaerolinea-23192.appspot.com/o/miaerolinea%2Faerolineas%2Fvolaris.png?alt=media&token=5ee29558-9d95-4462-868e-8fa0659dfd60",
      costoPersona: "1755",
      llegada:
        "Guadalajara, Don Miguel Hidalgo y Costilla, Jalisco, México (GDL)",
      salida: "Monterrey, Nuevo León, México (MTY)",
      tiempoVuelo: "1h 30min",
    },
  ];

  return (
    <div className={selection.container_selection}>
      {/* SCREEN */}
      <div className={selection.screen}>
        <Screen
          img={
            "https://firebasestorage.googleapis.com/v0/b/miaerolinea-23192.appspot.com/o/miaerolinea%2Fbanners%2Fbanner-3.jpg?alt=media&token=c21ce65e-a044-4de8-9ff5-6ef2f9fc953b"
          }
          title={"Contamos con una gran cantidad de viajes"}
        />
      </div>
      {/* SCREEN */}
      {/* CARD AEROLINE */}
      <div className="card_aeroline">
        {travels.map((travel) => (
          <CardAeroline key={travel.img} {...travel} />
        ))}
      </div>
      {/* CARD AEROLINE */}
    </div>
  );
};

export default Selection;
