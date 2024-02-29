"use client";

import { CartItem } from "@/app/_types/Cart";

import { TrashIcon } from "@heroicons/react/24/outline";

import Image from "next/image";

import useCartActions from "@/app/_hooks/useCartActions";

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const {
    quantity,
    incrementQuantity,
    decrementQuantity,
    enterQty,
    handleDeleteItem,
  } = useCartActions(cartItem);

  const { item: product } = cartItem;
  return (
    <div className="grid grid-cols-5 text-center border-b-2 border-white pb-8 border-opacity-70">
      <div className="flex gap-4 col-span-2 justify-center items-center">
        <div className=" w-32 h-32 relative">
          <Image
            src={product.url}
            alt={product.title}
            style={{ objectFit: "cover" }}
            sizes="100%"
            fill
            className="absolute inset-0 z-0"
          />
        </div>
        <div className=" w-[50%] flex gap-2 flex-col text-left">
          <p className="text-md">{product.title}</p>
          <p className="text-sm opacity-70">{product.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p>{product.price}$</p>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <button
          className="text-2xl opacity-80 hover:opacity-100 transition-opacity disabled:transition-none"
          onClick={decrementQuantity}
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="text"
          className=" bg-transparent w-8 text-center"
          value={quantity}
          onChange={enterQty}
        />
        <button
          className="text-2xl opacity-80 hover:opacity-100 transition-opacity"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center relative">
        <p>{product.price * quantity}$</p>
        <button
          className="absolute bottom-0 right-0 opacity-80 hover:opacity-100 transition-all hover:-translate-y-0.5 active:translate-y-0.5"
          onClick={handleDeleteItem}
        >
          <TrashIcon className="h-6 w-6 text-red-800" />
        </button>
      </div>
    </div>
  );
}
