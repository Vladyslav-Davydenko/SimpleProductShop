import { CartItem } from "@/app/_types/Cart";
import { CardType } from "@/app/_types/Card";

export type CartType = {
  items: CartItem[];
};

type CartAction =
  | {
      type: "SET_CART";
      payload: CartType;
    }
  | {
      type: "ADD_ITEM";
      payload: CartItem;
    }
  | {
      type: "DELETE_ITEM";
      payload: CartItem;
    }
  | {
      type: "CLEAR_CART";
    };

export const cartReducer = (cart: CartType, action: CartAction) => {
  switch (action.type) {
    case "SET_CART":
      return action.payload;
    case "ADD_ITEM": {
      const { payload: incomingItem } = action;

      const productId = incomingItem.item.id;
      const indexInCart = cart?.items?.findIndex(
        (item) => item.item.id === productId
      );

      let withAddedItem = [...(cart?.items || [])];

      if (indexInCart === -1) {
        withAddedItem.push(incomingItem);
      }

      if (typeof indexInCart === "number" && indexInCart > -1) {
        withAddedItem[indexInCart] = {
          ...withAddedItem[indexInCart],
          quantity:
            (incomingItem.quantity || 0) > 0
              ? incomingItem.quantity
              : undefined,
        };
      }

      return {
        ...cart,
        items: withAddedItem,
      };
    }
    case "DELETE_ITEM": {
      const { payload: incomingItem } = action;
      const withDeletedItem = { ...cart };

      const indexInCart = cart?.items?.findIndex(
        ({ item }) => item.id === incomingItem.item.id
      );

      if (
        typeof indexInCart === "number" &&
        withDeletedItem.items &&
        indexInCart > -1
      )
        withDeletedItem.items.splice(indexInCart, 1);

      return withDeletedItem;
    }
    case "CLEAR_CART": {
      return {
        ...cart,
        items: [],
      };
    }
    default: {
      return cart;
    }
  }
};
