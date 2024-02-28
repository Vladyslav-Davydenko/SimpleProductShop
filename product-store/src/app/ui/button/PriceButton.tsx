import { CardType } from "@/app/_types/Card";
import { MouseEventHandler } from "react";

interface PriceButtonProps {
  price: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
}

export default function PriceButton({
  price,
  onClick,
  isDisabled,
}: PriceButtonProps) {
  return (
    <button
      className="opacity-80 hover:opacity-100 transition-all duration-300 bg-blue-500 rounded-full px-3 py-1 text-white hover:-translate-y-0.5 active:translate-y-0.5 disabled:bg-gray-500 disabled:transform-none"
      disabled={isDisabled}
      onClick={onClick}
    >
      ${price}
    </button>
  );
}
