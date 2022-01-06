// Styles
import cardAeroline from "./CardAeroline.module.scss";
// Shared
import { CardPrice } from "..";
// Models
import { TravelsModel } from "../../../../interfaces/cards/TravelsModel";

export const CardAeroline = ({
  id,
  img,
  salida,
  llegada,
  tiempoVuelo,
  costoPersona,
  origen,
  destino,
}: TravelsModel) => {
  return (
    <div
      className={`animate__animated animate__fadeInDown ${cardAeroline.container_aeroline}`}
    >
      {/* IMG AEROLINE */}
      <div className={cardAeroline.img_aeroline}>
        <img src={img} alt={img} />
      </div>
      {/* IMG AEROLINE */}
      {/* DATA AEROLINE */}
      <div className={cardAeroline.data_aeroline}>
        {/* CONTAINER ORIGEN DESTINO */}
        <div className={cardAeroline.container_origen_destino}>
          {/* ORIGEN - DESTINO */}
          <div className={cardAeroline.title}>
            <p>
              <span>Origen:</span> {origen}
            </p>
            <p>
              <span>Destino:</span> {destino}
            </p>
          </div>
          {/* ORIGEN - DESTINO */}
          {/* CONTAINER DATA DETAIL */}
          <div className={cardAeroline.container_data_detail}>
            <p>Salida</p>
            <span>{salida}</span>
          </div>
          <div className={cardAeroline.container_data_detail}>
            <p>Llegada</p>
            <span>{llegada}</span>
          </div>
          <div className={cardAeroline.container_data_detail}>
            <p>Tiempo de vuelo</p>
            <span>{tiempoVuelo}</span>
          </div>
          {/* CONTAINER DATA DETAIL */}
        </div>
        {/* CONTAINER ORIGEN DESTINO */}
      </div>
      {/* DATA AEROLINE */}

      {/* PRICE DATA */}
      <div className={cardAeroline.price_data}>
        <CardPrice costoPersona={costoPersona} id={id} />
      </div>
      {/* PRICE DATA */}
    </div>
  );
};
