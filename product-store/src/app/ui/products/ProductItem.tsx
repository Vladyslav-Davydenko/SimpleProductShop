"use client";

import Image from "next/image";

import { useCart } from "@/app/_providers/Cart";

import { type CardType } from "@/app/_types/Card";
import { type CartItem } from "@/app/_types/Cart";

import PriceButton from "../button/PriceButton";
import StarRating from "../rating/StartRating";

interface ProductItemProps {
  product: CardType;
}

export default function ProductItem({ product }: ProductItemProps) {
  const { addItemToCart, isProductInCart } = useCart();

  const handleAddToCart = (card: CardType) => {
    const newCartItem: CartItem = {
      item: card,
      quantity: 1,
    };
    addItemToCart(newCartItem);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[450px] w-[300px] gap-4">
      <div className="relative h-[300px] w-full">
        <Image
          src={product.url}
          alt={product.title}
          style={{ objectFit: "cover" }}
          sizes="100%"
          fill
          className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 backface-hidden"
        />
      </div>
      <div className="flex justify-center content-between items-center ">
        <div className="w-[80%] flex flex-col gap-4">
          <p className="uppercase text-lg font-semibold tracking-wide">
            {product.title}
          </p>
          <StarRating rating={product.rating || 0} name={product.title} />
          <p className="text-sm text-gray-400">
            {product?.description?.substring(0, 50) || ""}
          </p>
        </div>
        <div className="w-[20%] flex justify-end items-end h-full">
          <PriceButton
            price={product.price}
            onClick={(e) => handleAddToCart(product)}
            isDisabled={isProductInCart(product)}
          />
        </div>
      </div>
    </div>
  );
}
