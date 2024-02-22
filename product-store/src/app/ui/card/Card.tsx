import { CardType } from "@/app/_types/Card";
import Image from "next/image";
import PriceButton from "@/app/ui/button/PriceButton";

interface CardProps {
  card: CardType;
}

export default async function Card({ card }: CardProps) {
  return (
    <div
      key={card.id}
      className={`group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 group border-white border-2`}
    >
      <Image
        src={card.url}
        alt={card.title}
        style={{ objectFit: "cover" }}
        fill
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 w-full h-[35%] bg-gradient-to-t from-black/100 to-black/50 p-8 text-white backdrop-blur-sm translate-y-48 group-hover:translate-y-0 transition-all group-hover:scale-105 duration-500">
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
            <PriceButton price={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
