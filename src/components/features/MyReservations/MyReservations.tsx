// Styles
import myReservations from "./MyReservations.module.scss";
// React Redux
import { useEffect, useState } from "react";
// React Redux
import { useSelector } from "react-redux";
// React Router
import { NavLink } from "react-router-dom";
// Shared
import { Button, CardAerolineDetail, CardAerolinePrice } from "../../shared";
import { Messages } from "../../shared/messages/Messages";
// Icons
import { FaArrowLeft, FaPlane } from "react-icons/fa";

const MyReservations = () => {
  const myShoppingCart: any[] = useSelector(
    (state: any) => state.shoppingCartAction
  );

  const [totalPrice, setTotalPrice] = useState(0);

  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    let totalPrice = 0;
    for (const item of myShoppingCart) {
      const total =
        parseInt(item.noPersonas) * parseInt(item.costoPersona) + 100;
      // console.log(total);
      totalPrice += total;
    }
    setTotalPrice(totalPrice);
    // Validate if has items in the shopping cart
    if (myShoppingCart && myShoppingCart.length > 0) {
      setHasItems(true);
    }
  }, []);

  return (
    <div
      className={`${myReservations.container_my_reservation} animate__animated animate__fadeIn`}
    >
      {/* TITLE RESERVATION */}
      <div className={`${myReservations.title_reservation}`}>
        <span>Mis reservas</span>
      </div>
      {/* TITLE RESERVATION */}
      {hasItems ? (
        <>
          {/* CARD AEROLINE DETAIL */}

          <div className={myReservations.card_aeroline_detail}>
            <div>
              {hasItems &&
                myShoppingCart.map(
                  ({
                    id,
                    noPersonas,
                    fecha,
                    origen,
                    destino,
                    tiempoVuelo,
                    img,
                    salida,
                    llegada,
                  }) => (
                    <CardAerolineDetail
                      img={img}
                      destino={destino}
                      fecha={fecha}
                      key={id}
                      origen={origen}
                      llegada={llegada}
                      tiempoVuelo={tiempoVuelo}
                      salida={salida}
                    />
                  )
                )}
            </div>
          </div>
          {/* CARD AEROLINE DETAIL */}
          {/* AEROLINE PRICE */}
          <div className={myReservations.aeroline_price}>
            <div className={myReservations.cards_price}>
              {hasItems &&
                myShoppingCart.map(
                  ({ id, noPersonas, origen, destino, costoPersona, img }) => (
                    <CardAerolinePrice
                      key={id}
                      img={img}
                      origen={origen}
                      destino={destino}
                      noPersonas={noPersonas}
                      precioPersona={costoPersona}
                    />
                  )
                )}
            </div>
            <div className={myReservations.price_container}>
              <span>Total: ${totalPrice}.00 MXN</span>
            </div>
            <div className={myReservations.button_container}>
              <NavLink to={"/"}>
                <Button
                  text={"Regresar"}
                  type={"primary"}
                  icon={<FaArrowLeft size={"1rem"} />}
                />
              </NavLink>
              <NavLink to={"/confirm-data"}>
                <Button
                  text={"Continuar"}
                  type={"secondary"}
                  icon={<FaPlane size={"1rem"} />}
                />
              </NavLink>
            </div>
          </div>
          {/* AEROLINE PRICE */}
        </>
      ) : (
        <div className={myReservations.no_items}>
          <Messages message={"No se han agregado viajes al carrito"} />
          <div>
            <NavLink to={"/"}>
              <Button
                text={"Regresar"}
                type={"secondary"}
                icon={<FaArrowLeft size={"1rem"} />}
              />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReservations;
