// Types
import { Types } from "../types/types";

// Add a travel to Shopping Cart
export const addTravelToShoppingCart = (myShoppingCart: any) => {
  return async (dispatch: any) => {
    dispatch(setAddShoppingCart(myShoppingCart));
  };
};

// Clean Shopping Cart
export const cleanShoppingCart = () => {
  return async (dispatch: any) => {
    dispatch(setCleanShoppingCart());
  };
};

// Add Item to the cart
export const setAddShoppingCart = (myShoppingCart: any) => ({
  type: Types.uiAddShoppingCart,
  payload: { myShoppingCart },
});

// Remove All Shopping Cart
export const setCleanShoppingCart = () => ({
  type: Types.uiCleanShoppingCart,
});
