// Styles
import navbar from "./Navbar.module.scss";
// React Redux
import { useSelector } from "react-redux";
// React Router
import { NavLink } from "react-router-dom";
// Icons
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

/**
 * @author Mario Tavarez
 * @date 02/01/2022
 * @description Navbar Component
 * @returns
 */
export const Navbar = () => {
  const myShoppingCart = useSelector((state: any) => state.shoppingCartAction);

  return (
    <>
      <div className={navbar.container_navbar}>
        {/* TITLE */}

        <h5 className={navbar.logo}>
          <NavLink to={"/"}>Mi Aerolinea</NavLink>
        </h5>

        {/* TITLE */}
        {/* SHOPPING CART */}
        <span className={`${navbar.shopping_cart}`}>
          <NavLink to={"my-reservations"}>
            {myShoppingCart && myShoppingCart.length > 0 ? (
              <FaCartPlus size={"2rem"} />
            ) : (
              <FaShoppingCart size={"2rem"} />
            )}
          </NavLink>
        </span>
        {/* SHOPPING CART */}
      </div>
    </>
  );
};
