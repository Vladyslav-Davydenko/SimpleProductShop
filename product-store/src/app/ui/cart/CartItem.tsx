"use client";

import { CartItem } from "@/app/_types/Cart";
import { useState } from "react";

import { TrashIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import { useCart } from "@/app/_providers/Cart";

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(cartItem.quantity ?? 1);

  const { addItemToCart, deleteItemFromCart } = useCart();

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;

    setQuantity(newQuantity);
    addItemToCart({ ...cartItem, quantity: Number(newQuantity) });
  };

  const decrementQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : quantity;

    setQuantity(newQuantity);
    addItemToCart({ ...cartItem, quantity: Number(newQuantity) });
  };

  const enterQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedQty = Number(e.target.value);

    if (!isNaN(updatedQty)) {
      setQuantity(updatedQty);
      addItemToCart({ ...cartItem, quantity: Number(updatedQty) });
    }
  };

  const handleDeleteItem = () => {
    deleteItemFromCart(cartItem);
  };

  const { item: product } = cartItem;
  return (
    <div className="grid grid-cols-5 text-center border-b-2 border-white pb-8 border-opacity-70">
      <div className="flex gap-4 col-span-2 justify-center items-center">
        <div className=" w-32 h-32 relative">
          <Image
            src={product.url}
            alt={product.title}
            style={{ objectFit: "cover" }}
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
        <button className="text-2xl" onClick={decrementQuantity}>
          -
        </button>
        <input
          type="text"
          className=" bg-transparent w-8 text-center"
          value={quantity}
          onChange={enterQty}
        />
        <button className="text-2xl" onClick={incrementQuantity}>
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