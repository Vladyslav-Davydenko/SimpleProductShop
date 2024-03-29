"use client";

import { type CardType } from "@/app/_types/Card";
import { type CartItem } from "@/app/_types/Cart";
import Image from "next/image";
import PriceButton from "@/app/ui/button/PriceButton";

import { useCart } from "@/app/_providers/Cart";

interface CardProps {
  card: CardType;
}

export default function Card({ card }: CardProps) {
  const { addItemToCart, isProductInCart, cart } = useCart();

  const handleAddToCart = (card: CardType) => {
    const newCartItem: CartItem = {
      item: card,
      quantity: 1,
    };
    addItemToCart(newCartItem);
  };

  return (
    <div
      key={card.id}
      className={`group relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] overflow-hidden bg-neutral-200 group border-white border-2`}
    >
      <Image
        src={card.url}
        alt={card.title}
        sizes="100%"
        style={{ objectFit: "cover" }}
        fill
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 backface-hidden"
      />
      <div className="absolute bottom-0 w-full h-[50%] md:h-[35%] bg-gradient-to-t from-black/100 to-black/50 p-8 text-white backdrop-blur-sm translate-y-48 group-hover:translate-y-0 transition-all group-hover:scale-105 duration-500">
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-[70%]">
            <p className="uppercase text-xl font-semibold tracking-wide">
              {card.title}
            </p>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
              culpa
            </p>
          </div>
          <div className=" flex items-end justify-end w-[30%]">
            <PriceButton
              price={card.price}
              onClick={() => handleAddToCart(card)}
              isDisabled={isProductInCart(card)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
