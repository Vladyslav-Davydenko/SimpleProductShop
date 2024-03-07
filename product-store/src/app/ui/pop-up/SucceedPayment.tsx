import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function SucceedPayment() {
  const { replace } = useRouter();

  const handleButtonBack = () => {
    replace("/products");
  };

  return (
    <div className=" fixed inset-0 bg-black/50 backdrop-blur-md z-30 flex justify-center items-center">
      <div className="side-section bg-black p-6 rounded-md w-[40rem] flex flex-col justify-center items-center gap-10">
        <CheckCircleIcon className=" h-24 w-24" />
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="uppercase text-md font-semibold tracking-wider">
            Thank you
          </p>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            consequuntur perspiciatis laborum esse aut praesentium laboriosam
            qui dolore labore quasi
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
  );
}
