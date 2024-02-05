"use client";

import { CardType } from "../motions/HorizontalMotion";
import Image from "next/image";

export default function Card({ card }: { card: CardType }) {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <Image
        src={card.url}
        alt={card.title}
        fill
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute top-0 left-0 right-0 z-10 grid place-content-center">
        <p className=" bg-gradient-to-b from-black/100 to-black/20 p-8 text-3xl font-black uppercase text-white backdrop-blur-sm">
          {card.title}
        </p>
      </div>
    </div>
  );
}
