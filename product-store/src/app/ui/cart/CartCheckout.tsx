import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface CartCheckOutProps {
  totalPrice: number;
  cartIsEmpty: boolean | undefined;
}

export default function CartCheckOut({
  totalPrice,
  cartIsEmpty,
}: CartCheckOutProps) {
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  return (
    <div className="w-[30%] side-section h-full border-white border-l-2 flex justify-start items-center flex-col">
      <div className="mt-20 pt-20 border-t-4 border-white">
        <p className="uppercase text-md font-semibold tracking-wider">
          Cart total{" "}
          <span className="text-2xl tracking-widest pl-4">${totalPrice}</span>
        </p>
        <p className="mt-4 opacity-70 tracking-wider">
          shipping and taxes are included
        </p>
        <div className="mt-20">
          <label className="text-sm tracking-wider">
            <input
              type="checkbox"
              className="mr-4"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
            />{" "}
            I agree to{" "}
            <a href="#" className="italic font-semibold underline">
              Terms of Condition
            </a>
          </label>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            className="flex gap-4 justify-center items-center opacity-80 hover:opacity-100 transition-all duration-300 bg-blue-500 rounded-full px-6 py-3 text-white hover:-translate-y-0.5 active:translate-y-0.5 disabled:bg-gray-500 disabled:transform-none"
            disabled={!isAgreed || cartIsEmpty}
          >
            Checkout
            <ShoppingBagIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
