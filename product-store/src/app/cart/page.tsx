"use client";

import { useCart } from "../_providers/Cart";
import CartItem from "../ui/cart/CartItem";

export default function Cart() {
  const { cart, clearCart, cartIsEmpty } = useCart();
  return (
    <main className="h-[100vh] flex items-center flex-col mb-48">
      <div className="flex h-[100%] gap-8 w-full mt-20">
        <div className="w-[70%] px-12 overflow-scroll relative pb-20">
          <div className="grid grid-cols-5 text-center sticky top-0 left-0 right-0 backdrop-blur-md bg-black/50 z-10 py-4">
            <p className=" uppercase font-semibold text-md opacity-80 col-span-2">
              Product
            </p>
            <p className=" uppercase font-semibold text-md opacity-80">Price</p>
            <p className=" uppercase font-semibold text-md opacity-80">
              Quantity
            </p>
            <p className=" uppercase font-semibold text-md opacity-80">Total</p>
          </div>
          <div className="flex flex-col gap-8 mt-10">
            {cart.items.map((item) => {
              return <CartItem cartItem={item} key={item.item.id} />;
            })}
          </div>
          {!cartIsEmpty ? (
            <div className="pt-8 col-span-5 flex justify-end">
              <button
                className="opacity-80 hover:opacity-100 transition-all duration-300 bg-red-500 rounded-full px-3 py-1 text-white hover:-translate-y-0.5 active:translate-y-0.5 disabled:bg-gray-500 disabled:transform-none"
                onClick={clearCart}
                disabled={cartIsEmpty}
              >
                Clear
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center text-md opacity-80 h-[85%]">
              <p>Nothing has been added to the cart</p>
            </div>
          )}
        </div>
        <div className="w-[30%] side-section h-full border-white border-l-2 flex justify-center items-center flex-col">
          <p>Total price:$</p>
        </div>
      </div>
    </main>
  );
}
