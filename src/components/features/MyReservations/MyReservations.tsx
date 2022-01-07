// Styles
import myReservations from "./MyReservations.module.scss";
// React Redux
import { useEffect, useState } from "react";
// React Redux
import { useDispatch, useSelector } from "react-redux";
// React Router
import { NavLink } from "react-router-dom";
// Shared
import { Button, CardAerolineDetail, CardAerolinePrice } from "../../shared";
import { Messages } from "../../shared/messages/Messages";
// Icons
import { FaArrowLeft, FaPlane, FaTrash } from "react-icons/fa";
// Actions
import { removeTravelToShoppingCart } from "../../../actions/shoppingCartAction";

const MyReservations = () => {
  const myShoppingCart: any[] = useSelector(
    (state: any) => state.shoppingCartAction
  );

  // Total Price
  const [totalPrice, setTotalPrice] = useState(0);
  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    let totalPrice = 0;
    for (const item of myShoppingCart) {
      const total =
        parseInt(item.noPersonas) * parseInt(item.costoPersona) + 100;
      totalPrice += total;
    }
    setTotalPrice(totalPrice);
    // Validate if has items in the shopping cart
  }, [myShoppingCart]);

  // Delete a item from shopping cart
  const deleteItem = (id: string) => {
    dispatch(removeTravelToShoppingCart(id));
  };

  return (
    <div
      className={`${myReservations.container_my_reservation} animate__animated animate__fadeIn`}
    >
      {/* TITLE RESERVATION */}
      <div className={`${myReservations.title_reservation}`}>
        <span>Mis reservas</span>
      </div>
      {/* TITLE RESERVATION */}
      {myShoppingCart && myShoppingCart.length > 0 ? (
        <>
          {/* CARD AEROLINE DETAIL */}

          <div className={myReservations.card_aeroline_detail}>
            <div>
              {myShoppingCart.map(
                ({
                  id,
                  fecha,
                  origen,
                  destino,
                  tiempoVuelo,
                  img,
                  salida,
                  llegada,
                }) => (
                  <div
                    key={id}
                    className={myReservations.container_options_delete}
                  >
                    <span>
                      <Button
                        text={"Quitar del carrito"}
                        type={"primary"}
                        size={"lg"}
                        onChildClick={() => deleteItem(id)}
                        icon={<FaTrash size={"1rem"} />}
                      />
                    </span>
                    <CardAerolineDetail
                      img={img}
                      destino={destino}
                      fecha={fecha}
                      origen={origen}
                      llegada={llegada}
                      tiempoVuelo={tiempoVuelo}
                      salida={salida}
                    />
                  </div>
                )
              )}
            </div>
          </div>
          {/* CARD AEROLINE DETAIL */}
          {/* AEROLINE PRICE */}
          {myShoppingCart && (
            <div className={myReservations.aeroline_price}>
              <div className={myReservations.cards_price}>
                {myShoppingCart.map(
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
                    type={"tertiary"}
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
          )}
          {/* AEROLINE PRICE */}
        </>
      ) : (
        // NO ITEMS
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
        // NO ITEMS
      )}
    </div>
  );
};

export default MyReservations;
