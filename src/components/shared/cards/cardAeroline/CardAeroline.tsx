// Styles
import cardAeroline from "./CardAeroline.module.scss";
// Shared
import { CardPrice } from "..";
// Models
import { TravelsModel } from "../../../../interfaces/cards/TravelsModel";

export const CardAeroline = ({
  img,
  salida,
  llegada,
  tiempoVuelo,
  costoPersona,
}: TravelsModel) => {
  return (
    <div className={cardAeroline.container_aeroline}>
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
          <p className={cardAeroline.title}>Origen - Destino</p>
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
        <CardPrice costoPersona={costoPersona} />
      </div>
      {/* PRICE DATA */}
    </div>
  );
};
