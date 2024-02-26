"use client";

import { useCart } from "../_providers/Cart";

import CartItems from "../ui/cart/CartItems";
import CartCheckOut from "../ui/cart/CartCheckout";

export default function Page() {
  const { cart, clearCart, cartIsEmpty, totalPrice } = useCart();
  return (
    <main className="h-[100vh] flex items-center flex-col">
      <div className="flex h-[100%] gap-8 w-full mt-20">
        <CartItems
          cart={cart}
          clearCart={clearCart}
          cartIsEmpty={cartIsEmpty}
        />
        <CartCheckOut cartIsEmpty={cartIsEmpty} totalPrice={totalPrice} />
      </div>
    </main>
  );
}
