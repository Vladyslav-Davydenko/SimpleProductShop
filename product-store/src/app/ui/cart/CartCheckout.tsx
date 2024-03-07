"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/_providers/Cart";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

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
  const [isSucceed, setIsSucceed] = useState(false);
  const { replace } = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const { clearCart } = useCart();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");
    setPaymentError("");

    try {
      if (!stripe || !cardElement) {
        setPaymentError("Something went erong");
        return null;
      }
      const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: totalPrice },
      });
      const clientSecret = data;

      const result = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });
      if (result.error) {
        setPaymentError(result.error.message || "Something went wrong");
      } else {
        clearCart();
        setIsSucceed(true);
      }
    } catch (error) {
      setPaymentError(error as string);
    }
  };

  const handleButtonBack = () => {
    replace("/products");
  };

  return (
    <>
      {isSucceed && (
        <div className=" fixed inset-0 bg-black/50 backdrop-blur-md z-30 flex justify-center items-center">
          <div className="side-section bg-black p-6 rounded-md w-[40rem] flex flex-col justify-center items-center gap-10">
            <CheckCircleIcon className=" h-24 w-24" />
            <div className="flex flex-col justify-center items-center gap-6">
              <p className="uppercase text-md font-semibold tracking-wider">
                Thank you
              </p>
              <p className="text-sm opacity-70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias consequuntur perspiciatis laborum esse aut praesentium
                laboriosam qui dolore labore quasi
              </p>
              <button
                onClick={handleButtonBack}
                className="opacity-80 hover:opacity-100 transition-all duration-300 bg-blue-500 rounded-full px-3 py-1 text-white hover:-translate-y-0.5 active:translate-y-0.5 disabled:bg-gray-500 disabled:transform-none"
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      )}
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
          <p className="mt-10 text-red-500 tracking-wider italic">
            {paymentError}
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
      </form>
    </>
  );
}
