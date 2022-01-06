// Types
import { Types } from "../types/types";

export const shoppingCartReducer = (state = [], action: any) => {
  switch (action.type) {
    case Types.uiAddShoppingCart:
      return [...state, action.payload.myShoppingCart];
    case Types.uiRemoveShoppingCart:
      return {
        myShoppingCart: [],
      };
    default:
      return state;
  }
};
