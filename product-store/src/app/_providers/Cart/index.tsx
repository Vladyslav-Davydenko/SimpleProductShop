"use client";

import { type CartItem } from "@/app/_types/Cart";
import { CartType, cartReducer } from "./reducer";
import { type CardType } from "@/app/_types/Card";
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
import { fetchPerfumeById } from "@/app/lib/data";
import { usePathname } from "next/navigation";

const LOCAL_STORAGE_NAME = "simple-product-store-cart";

export type CartContext = {
  cart: CartType;
  addItemToCart: (item: CartItem) => void;
  deleteItemFromCart: (product: CartItem) => void;
  cartIsEmpty: boolean | undefined;
  clearCart: () => void;
  isProductInCart: (product: CardType) => boolean;
  cartTotal: number;
  totalPrice: number;
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
  const pathname = usePathname();

  const [cart, dispatchCart] = useReducer(cartReducer, {
    items: [],
  });

  const [total, setTotal] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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

  const deleteItemFromCart = useCallback((incomingProduct: CartItem) => {
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
    const syncCartFromLocalStorage = async () => {
      const localCart = localStorage.getItem(LOCAL_STORAGE_NAME);
      const parsedCart: { items: { item: string; quantity: number }[] } =
        JSON.parse(localCart || "{}");

      if (parsedCart?.items && parsedCart?.items?.length > 0) {
        const initialCart = await Promise.all(
          parsedCart.items.map(async ({ item, quantity }) => {
            const res = await fetch(`/api/product/${item}`);
            if (res.ok) {
              const data = await res.json();
              return {
                item: data,
                quantity,
              };
            }
          })
        );
        dispatchCart({
          type: "SET_CART",
          payload: {
            items: initialCart[0] ? (initialCart as CartItem[]) : [],
          },
        });
      } else {
        dispatchCart({
          type: "SET_CART",
          payload: {
            items: [],
          },
        });
      }
    };
    syncCartFromLocalStorage();
  }, []);

  useEffect(() => {
    const flattenedCart = cart.items.map((item) => {
      if (item.item) {
        return {
          item: item.item.id,
          quantity: item.quantity,
        };
      }
    });
    localStorage.setItem(
      LOCAL_STORAGE_NAME,
      JSON.stringify({ items: flattenedCart })
    );
  }, [cart]);

  useEffect(() => {
    const newTotal = cart?.items?.reduce((acc, item) => {
      return acc + (typeof item?.quantity === "number" ? item.quantity : 0);
    }, 0);

    const newPriceTotal = cart?.items?.reduce((acc, item) => {
      return (
        acc +
        (typeof item?.quantity === "number"
          ? item.quantity * item.item.price
          : 0)
      );
    }, 0);

    setTotalPrice(newPriceTotal);
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
        totalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};
