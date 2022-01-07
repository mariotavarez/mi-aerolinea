// Styles
import cardAerolinePrice from "./CardAerolinePrice.module.scss";
// React Hooks
import { useEffect, useState } from "react";

interface CardAerolinePriceModel {
  img: string;
  noPersonas: string;
  origen: string;
  destino: string;
  precioPersona: string;
}

export const CardAerolinePrice = ({
  img,
  noPersonas,
  origen,
  destino,
  precioPersona,
}: CardAerolinePriceModel) => {
  const [costoTotal, setCostoTotal] = useState(0);

  useEffect(() => {
    const total = parseInt(noPersonas) * parseInt(precioPersona) + 100;
    setCostoTotal(total);
  }, [noPersonas, precioPersona]);

  return (
    <div className={cardAerolinePrice.container_aeroline_price}>
      {/* HEADER AEROLINE PRICE */}
      <div className={cardAerolinePrice.header_aeroline_price}>
        <div className={cardAerolinePrice.aeroline_img_price}>
          <img src={img} alt={img} />
        </div>
        <div className={cardAerolinePrice.aeroline_origen_destino_price}>
          <span>
            {origen} - {destino}
          </span>
        </div>
      </div>
      {/* HEADER AEROLINE PRICE */}
      {/* CONTENT AEROLINE PRICE */}
      <div className={cardAerolinePrice.content_aeroline_price}>
        <div>Pasajeros ({noPersonas}) </div>
        <div></div>
        <div>Precio por persona</div>
        <div>
          {" "}
          <strong>${precioPersona} MXN</strong>
        </div>
        <div>Cargos y tasas</div>
        <div>
          <strong>$100 MXN</strong>
        </div>
      </div>
      {/* CONTENT AEROLINE PRICE */}
      {/* FOOTER AEROLINE PRICE */}
      <div className={cardAerolinePrice.footer_aeroline_price}>
        <div className={cardAerolinePrice.footer_aeroline_price_detail}>
          <strong>${costoTotal} MXN</strong>
        </div>
      </div>
      {/* FOOTER AEROLINE PRICE */}
    </div>
  );
};
