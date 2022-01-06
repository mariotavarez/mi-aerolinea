// Styles
import cardAerolineDetail from "./CardAerolineDetail.module.scss";

interface CardAerolineDetailModel {
  fecha: string;
  origen: string;
  destino: string;
  salida: string;
  llegada: string;
  tiempoVuelo: string;
  img: string;
}

export const CardAerolineDetail = ({
  fecha,
  origen,
  destino,
  salida,
  llegada,
  tiempoVuelo,
  img,
}: CardAerolineDetailModel) => {
  return (
    <div className={cardAerolineDetail.container_card_aeroline_detail}>
      {/* HEADER DETAIL */}
      <div className={cardAerolineDetail.header_detail}>
        {/* FECHA */}
        <div>
          <span>Ida: {fecha}</span>
        </div>
        {/* FECHA */}
        {/* IMAGE AEROLINE */}
        <div className={cardAerolineDetail.img_aeroline}>
          <img src={img} alt={img} />
        </div>
        {/* IMAGE AEROLINE */}
        {/* ORIGEN AND DESTINO */}
        <div>
          <p>Origen</p>
          <span>{origen}</span>
          <p>Destino</p>
          <span>{destino}</span>
        </div>
        {/* ORIGEN AND DESTINO */}
      </div>
      {/* HEADER DETAIL */}
      {/* CONTENT DETAIL */}
      <div className={cardAerolineDetail.content_detail}>
        {/* HORARIOS DETAIL */}
        <div className={cardAerolineDetail.horarios_detail}>
          {/* HORARIO SALIDA */}
          <div className={cardAerolineDetail.horario_salida}>
            <strong>Salida</strong>
            <p>{salida}</p>
          </div>
          {/* HORARIO SALIDA */}
          {/* HORARIO LLEGADA */}
          <div className={cardAerolineDetail.horario_llegada}>
            <strong>Llegada</strong>
            <p>{llegada}</p>
          </div>
          {/* HORARIO LLEGADA */}
        </div>
        {/* HORARIOS DETAIL */}
        {/* DURACION VIAJE DETAIL */}
        <div className={cardAerolineDetail.duracion_viaje_detail}>
          <strong>Duracion viaje</strong>
          <p>{tiempoVuelo}</p>
        </div>
        {/* DURACION VIAJE DETAIL */}
      </div>
      {/* CONTENT DETAIL */}
    </div>
  );
};
