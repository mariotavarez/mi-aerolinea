// Styles
import navbar from "./Navbar.module.scss";
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
        <h5 className={navbar.logo}>Mi Aerolinea</h5>
        {/* TITLE */}
        {/* SHOPPING CART */}
        <span className={navbar.shopping_cart}>
          <AiOutlineShoppingCart size={"2rem"} />
        </span>
        {/* SHOPPING CART */}
      </div>
    </>
  );
};
