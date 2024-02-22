"use client";

import { CartItem } from "@/app/_types/Cart";
import { CartType, cartReducer } from "./reducer";
import { CardType } from "@/app/_types/Card";
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export type CartContext = {
  cart: CartType;
  addItemToCart: (item: CartItem) => void;
  deleteItemFromCart: (product: CardType) => void;
  cartIsEmpty: boolean | undefined;
  clearCart: () => void;
  isProductInCart: (product: CardType) => boolean;
  cartTotal: number;
};

interface CartProviderProps {
  children: ReactNode;
}

const Context = createContext({} as CartContext);

export const useCart = () => useContext(Context);

const arrayHasItems = (array: CartItem[]) =>
  Array.isArray(array) && array.length > 0;

export const CartProvider: FC<CartProviderProps> = (props) => {
  const { children } = props;

  const [cart, dispatchCart] = useReducer(cartReducer, {
    items: [],
  });

  const [total, setTotal] = useState<number>(0);

  const isProductInCart = useCallback(
    (incomingProduct: CardType): boolean => {
      let isInCart = false;
      const { items: itemsInCart } = cart || {};
      if (Array.isArray(itemsInCart) && itemsInCart.length > 0) {
        isInCart = Boolean(
          itemsInCart.find(({ item }) => item.id === incomingProduct.id)
        );
      }

      return isInCart;
    },
    [cart]
  );

  const addItemToCart = useCallback((incomingItem: CartItem) => {
    dispatchCart({
      type: "ADD_ITEM",
      payload: incomingItem,
    });
  }, []);

  const deleteItemFromCart = useCallback((incomingProduct: CardType) => {
    dispatchCart({
      type: "DELETE_ITEM",
      payload: incomingProduct,
    });
  }, []);

  const clearCart = useCallback(() => {
    dispatchCart({
      type: "CLEAR_CART",
    });
  }, []);

  useEffect(() => {
    const newTotal = cart?.items?.reduce((acc, item) => {
      return acc + (typeof item?.quantity === "number" ? item.quantity : 0);
    }, 0);

    setTotal(newTotal);
  }, [cart]);

  return (
    <Context.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        cartIsEmpty: !arrayHasItems(cart?.items),
        clearCart,
        isProductInCart,
        cartTotal: total,
      }}
    >
      {children}
    </Context.Provider>
  );
};
