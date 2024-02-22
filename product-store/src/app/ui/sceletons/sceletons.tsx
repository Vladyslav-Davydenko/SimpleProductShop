"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PriceButton from "../button/PriceButton";

// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-900/60 before:to-transparent";

export const CardSquareSceleton = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);
  const emptyCards = new Array(8).fill({});

  return (
    <section
      ref={targetRef}
      className="relative h-[600vh] border-white border-2"
    >
      <div className="sticky top-0 flex h-screen w-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {emptyCards.map((_, count) => {
            return <SquareCardSceleton key={count} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export const SquareCardSceleton = () => {
  return (
    <div
      className={` ${shimmer} group relative h-[450px] w-[450px] overflow-hidden group border-white border-2`}
    >
      <div className="absolute bottom-0 w-full h-[35%] bg-gradient-to-t from-black/100 to-black/50 p-8 text-white backdrop-blur-sm translate-y-48 group-hover:translate-y-0 transition-all group-hover:scale-105 duration-500">
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-[70%]">
            <p className="uppercase text-xl font-semibold tracking-wide">
              Loading...
            </p>
            <p className="text-sm text-gray-400">loading...</p>
          </div>
          <div className=" flex items-end justify-end w-[30%]"></div>
        </div>
      </div>
    </div>
  );
};
