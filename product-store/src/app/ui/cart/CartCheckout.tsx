"use client";

import { useState } from "react";
import { useCart } from "@/app/_providers/Cart";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

interface CartCheckOutProps {
  totalPrice: number;
  cartIsEmpty: boolean | undefined;
}

export default function CartCheckOut({
  totalPrice,
  cartIsEmpty,
}: CartCheckOutProps) {
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [paymentError, setPaymentError] = useState("");
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const { clearCart } = useCart();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");

    try {
      if (!stripe || !cardElement) {
        setPaymentError("Something went erong");
        return null;
      }
      const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: totalPrice },
      });
      const clientSecret = data;

      await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });
      setSuccess(true);
      clearCart();
    } catch (error) {
      setPaymentError(error as string);
    }
  };

  return (
    <form
      className="w-[30%] side-section h-full border-white border-l-2 flex justify-start items-center flex-col"
      onSubmit={onSubmit}
    >
      <div className="mt-20 pt-20 border-t-4 border-white w-[80%]">
        <p className="uppercase text-md font-semibold tracking-wider">
          Cart total{" "}
          <span className="text-2xl tracking-widest pl-4">${totalPrice}</span>
        </p>
        <div className="py-6">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "white",
                  "::placeholder": {
                    color: "#white",
                  },
                },
                invalid: {
                  color: "red",
                },
              },
            }}
          />
        </div>
        <p className="mt-4 opacity-70 tracking-wider">
          shipping and taxes are included
        </p>
        <p>{paymentError}</p>
        {success ?? <p>Thank you for purchase</p>}
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
    </form>
  );
}
