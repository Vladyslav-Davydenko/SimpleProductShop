import HorizontalMotion from "../ui/motions/HorizontalMotion";
import Image from "next/image";
import Card from "../ui/card/Card";

export default function Products() {
  return (
    <main className="h-[900vh] flex items-center flex-col">
      <div className="flex flex-col h-[200vh] w-full items-center justify-center main-section gap-32">
        <div className="h-[10%] flex items-center justify-center">
          <p className="text-4xl font-bold tracking-wide text-center mb-10">
            Perfumes for everyone
          </p>
        </div>
        <div className="flex gap-8 w-[70%] justify-center items-center">
          <div className="w-[70%]">
            <p className="leading-relaxed text-start tracking-wider">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam eius atque repudiandae a impedit dolor error cumque
              voluptate nisi nihil consequuntur quam eveniet, ad quasi maiores
              repellat reiciendis minima culpa.
            </p>
          </div>
          {/* <div className="group relative h-[450px] w-[30%] overflow-hidden bg-neutral-200 group border-white border-2">
            <Image
              src="/perfumes/mans-perfume.jpg"
              alt="Blue De Chanel"
              style={{ objectFit: "cover" }}
              fill
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/100 to-black/70 p-8 text-white backdrop-blur-sm translate-y-48 group-hover:translate-y-0 transition-all group-hover:scale-105 duration-500">
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 w-[80%]">
                  <p className="uppercase text-xl font-semibold tracking-wide">
                    Blue De Chanel
                  </p>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis a culpa
                  </p>
                </div>
                <div className=" flex items-end justify-end w-[20%]">
                  <p className=" text-lg font-semibold tracking-wide">300$</p>
                </div>
              </div>
            </div>
          </div> */}
          <Card
            card={{
              url: "/perfumes/mans-perfume.jpg",
              title: "Blue De Chanel",
              id: 101,
            }}
            height="450px"
            width="30%"
          />
        </div>
        <div className="flex gap-8 w-[70%] justify-center items-center">
          <div className="group relative h-[450px] w-[30%] overflow-hidden bg-neutral-200 group border-white border-2">
            <Image
              src="/perfumes/womans-perfume.jpg"
              alt="Blue De Chanel"
              style={{ objectFit: "cover" }}
              fill
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/100 to-black/70 p-8 text-white backdrop-blur-sm translate-y-48 group-hover:translate-y-0 transition-all group-hover:scale-105 duration-500">
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 w-[80%]">
                  <p className="uppercase text-xl font-semibold tracking-wide">
                    Blue De Chanel
                  </p>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis a culpa
                  </p>
                </div>
                <div className=" flex items-end justify-end w-[20%]">
                  <p className=" text-lg font-semibold tracking-wide">300$</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[70%]">
            <p className="leading-relaxed text-end tracking-wider">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam eius atque repudiandae a impedit dolor error cumque
              voluptate nisi nihil consequuntur quam eveniet, ad quasi maiores
              repellat reiciendis minima culpa.
            </p>
          </div>
        </div>
      </div>
      <HorizontalMotion />
      <div className="flex w-full items-center justify-center main-section h-[100vh]">
        <span className="font-semibold uppercase">Next Section</span>
      </div>
    </main>
  );
}
