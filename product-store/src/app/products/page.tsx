import HorizontalMotion from "../ui/motions/HorizontalMotion";
import { CardVerticalSceleton } from "../ui/sceletons/sceletons";
import { Suspense } from "react";
import VerticalCard from "../ui/card/VerticalCard";

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
          <Suspense fallback={<CardVerticalSceleton />}>
            <VerticalCard
              url="/perfumes/womans-perfume.jpg"
              title="Blue De Chanel"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
              culpa"
            />
          </Suspense>
        </div>
        <div className="flex gap-8 w-[70%] justify-center items-center">
          <Suspense fallback={<CardVerticalSceleton />}>
            <VerticalCard
              url="/perfumes/mans-perfume.jpg"
              title="Blue De Chanel"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
              culpa"
            />
          </Suspense>
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