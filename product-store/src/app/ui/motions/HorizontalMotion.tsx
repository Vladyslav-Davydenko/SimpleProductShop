"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Suspense } from "react";
import { CardSquareSceleton } from "../sceletons/sceletons";

import Link from "next/link";

import Card from "../card/Card";
import { type CardType } from "@/app/_types/Card";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface HorizontalMotionProps {
  cards: CardType[];
}

export default function HorizontalMotion({ cards }: HorizontalMotionProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[600vh] border-white border-t-2"
    >
      <div className="sticky top-0 flex h-screen w-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return (
              <Suspense key={card.id} fallback={<CardSquareSceleton />}>
                <Card card={card} key={card.id} />{" "}
              </Suspense>
            );
          })}
          <div className="flex justify-center items-center">
            <Link
              href={"/products"}
              className="flex gap-2 justify-center items-center opacity-80 hover:opacity-100 transition-opacity duration-300 bg-blue-500 rounded-full pl-6 pr-5 py-2 text-white text-center"
            >
              More
              <ArrowRightCircleIcon className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
