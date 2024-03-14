"use client";

import { useCart } from "../_providers/Cart";

import CartItems from "../ui/cart/CartItems";
import CartCheckOut from "../ui/cart/CartCheckout";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Page() {
  const { cart, clearCart, cartIsEmpty, totalPrice } = useCart();
  return (
    <main className="min-h-[100vh] w-full flex items-center flex-col border-b-2 border-white">
      <div className="flex flex-col md:flex-row min-h-[100%] gap-8 w-full mt-20">
        <div className="order-2 md:order-1 w-full md:w-[70%] px-2 md:px-12 overflow-scroll relative pb-10 md:pb-20">
          <CartItems
            cart={cart}
            clearCart={clearCart}
            cartIsEmpty={cartIsEmpty}
          />
        </div>
        <Elements stripe={stripePromise}>
          <div className="order-1 md:order-2 w-[full] md:w-[30%]">
            <CartCheckOut cartIsEmpty={cartIsEmpty} totalPrice={totalPrice} />
          </div>
        </Elements>
      </div>
    </main>
  );
}
