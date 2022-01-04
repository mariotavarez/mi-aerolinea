// Styles
import navbar from "./Navbar.module.scss";
// React Router
import { NavLink } from "react-router-dom";
// Icons
import { AiOutlineShoppingCart } from "react-icons/ai";

/**
 * @author Mario Tavarez
 * @date 02/01/2022
 * @description Navbar Component
 * @returns
 */
export const Navbar = () => {
  return (
    <>
      <div className={navbar.container_navbar}>
        {/* TITLE */}

        <h5 className={navbar.logo}>
          <NavLink to={"/"}>Mi Aerolinea</NavLink>
        </h5>

        {/* TITLE */}
        {/* SHOPPING CART */}
        <span className={navbar.shopping_cart}>
          <NavLink to={"my-reservations"}>
            <AiOutlineShoppingCart size={"2rem"} />
          </NavLink>
        </span>
        {/* SHOPPING CART */}
      </div>
    </>
  );
};
