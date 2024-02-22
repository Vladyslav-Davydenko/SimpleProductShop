"use client";

import { useCart } from "../_providers/Cart";
import CartItem from "../ui/cart/CartItem";

export default function Cart() {
  const { cart } = useCart();
  return (
    <main className="h-[100vh] flex items-center flex-col">
      <div className="flex h-full gap-8 w-full">
        <div className="w-[70%] p-12 mt-20 overflow-hidden">
          <div className="grid grid-cols-5 text-center">
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
        </div>
        <div className="w-[30%] side-section h-full border-white border-l-2 flex justify-center items-center flex-col">
          <p>Total price:$</p>
        </div>
      </div>
    </main>
  );
}
