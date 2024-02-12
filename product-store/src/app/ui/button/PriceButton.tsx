interface PriceButtonProps {
  price: number;
}

export default function PriceButton({ price }: PriceButtonProps) {
  return (
    <button className="opacity-80 hover:opacity-100 transition-all duration-300 bg-blue-400 rounded-full px-3 py-1 text-white hover:-translate-y-0.5 active:translate-y-0.5">
      ${price}
    </button>
  );
}
