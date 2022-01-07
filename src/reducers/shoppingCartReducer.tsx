// Types
import { Types } from "../types/types";

export const shoppingCartReducer = (state = [], action: any) => {
  switch (action.type) {
    case Types.uiAddShoppingCart:
      return [...state, action.payload.myShoppingCart];
    case Types.uiRemoveShoppingCart:
      const index = state.findIndex(
        (item: any) => item.id === action.payload.id
      );
      state.splice(index, 1);
      // Object.assign(state, state);
      return [...state];
    case Types.uiCleanShoppingCart:
      return [];
    default:
      return state;
  }
};
